const express = require('express');
const path = require('path');
const app = express();
const nunjucks = require('nunjucks');
const selectorsExamplesRenderer = require('./lib/selectors-examples-renderer');
const markdownEngine = require('./lib/markdown-renderer');

// Define port to run server on
var port = process.env.PORT || 3000 ;

function setFileToRender(req, res, next) {
	req.fileToRender = /\/$/.test(req.path) ? `${req.path}README.md` : req.path;
	next();
}

function useRootReadMe(req, res, next) {
	req.fileToRender = `..${req.fileToRender}`;
	next();
}

app.use(express.static('public'));
app.use(setFileToRender);

app.get('/css/selectors/examples/*', selectorsExamplesRenderer);
app.get(/^\/(README.md)?$/, useRootReadMe, markdownEngine);

app.get('*', markdownEngine);

app.listen( port ) ;
console.log('Listening on port %s...', port) ;
