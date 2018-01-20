const express = require('express');
const path = require('path');
const app = express();
const nunjucks = require('nunjucks');
const selectorsExamplesRenderer = require('./lib/selectors-examples-renderer');
const markdownEngine = require('./lib/markdown-engine');

// Define port to run server on
var port = process.env.PORT || 3000 ;

app.use(express.static('public'));

app.engine('md', markdownEngine);
app.set('view engine', 'md')

app.get('/css/selectors/examples/*', selectorsExamplesRenderer);

app.get('*', function (req, res) {
	const reqPath = req.path === '/' ? `${req.path}README.md` : req.path;
    res.render(`${__dirname}/notes${reqPath}`);
});

// Start server
app.listen( port ) ;
console.log('Listening on port %s...', port) ;
