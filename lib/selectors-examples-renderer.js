const util = require('util');
const path = require('path');
const fs = require('fs');
const readFile = util.promisify(require('fs').readFile);
const cheerio = require('cheerio');
const marked = require('marked');
const nunjucks = require('nunjucks');

const notesFolder = path.resolve(__dirname, '../notes');
const baseTemplateContent  = fs.readFileSync(path.join(__dirname, '../lib/templates/_base.html'), 'utf8');
const baseTemplate = nunjucks.compile(baseTemplateContent);
const templateContent = fs.readFileSync(path.join(__dirname, '../lib/templates/css-selectors-examples.html'), 'utf8');
const template = nunjucks.compile(templateContent);

const escape = str => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildBreadCrumbs(dir) {
	const breadcrumbs = path
		.relative(notesFolder, dir)
		.split('/')
		.reduce((list, item) => {
			const lastItem = list[list.length - 1];
			const lastItemUri = lastItem.uri.replace('/README.md', '/');
			const newItem = {
				uri: `${lastItemUri}${item}/README.md`,
				label: item
			}
			return list.concat(newItem);
		}, [{uri: '/README.md', label: 'home'}]);
	return breadcrumbs;
}

async function selectorExamplesRenderer(req, res) {
	const filePath = /.md$/.test(req.fileToRender) ? req.fileToRender : `${req.fileToRender}.md`;
	const absoluteFilePath = path.join(__dirname, '..', 'notes', filePath);
	const { name, dir } = path.parse(absoluteFilePath)
	const markdown = await readFile(absoluteFilePath, 'utf8');
	const htmlPartial = marked(markdown);
	const $ = cheerio.load(htmlPartial);
	
	const breadcrumbs = buildBreadCrumbs(dir);

	const styles = $('pre code.lang-css').text();
	const markup = $('pre code.lang-html').text();
	
	$('pre code.lang-css').parent().remove();
	$('pre code.lang-html').parent().remove();

	const content = cheerio.load($.html())('body').wrap('pre code').html();
	const renderd = template.render({ baseTemplate, name, styles, markup, content, breadcrumbs });

	res.send(renderd);
}

module.exports = selectorExamplesRenderer;
