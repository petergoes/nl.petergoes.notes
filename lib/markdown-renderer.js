const util = require('util');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const nunjucks = require('nunjucks');
const readFile = util.promisify(require('fs').readFile);
const { kebabCase, words, upperFirst } = require('lodash');
const { map, join, flow } = require('lodash/fp');

const notesFolder = path.resolve(__dirname, '../notes');

const baseTemplateContent = fs.readFileSync(path.join(__dirname, '../lib/templates/_base.html'), 'utf8');
const baseTemplate = nunjucks.compile(baseTemplateContent);

function buildBreadCrumbs(dir) {
	const homeItem = {uri: '/', label: 'home'};
	const dirPath = path.relative(notesFolder, dir)

	if (dirPath === '') {
		return [];
	}

	let breadcrumbs = dirPath
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

module.exports = async function (req, res) {
	const filePath = /.md$/.test(req.fileToRender) ? req.fileToRender : `${req.fileToRender}.md`;
	const absoluteFilePath = path.join(__dirname, '..', 'notes', filePath);
	let { name, dir } = path.parse(absoluteFilePath)
	let content = await readFile(absoluteFilePath, 'utf8');

	// use the root README as the homepage, that why we need to make 
	// modifications to the root readme as if it was in the notes/ folder
	if (path.relative(path.join(__dirname, '..'), absoluteFilePath) === 'README.md') {
		dir = `${dir}/notes`; 
		content = content.replace(/]\(\/notes\//g, '](/');
	}

	if (name === 'README') {
		const titleCase = flow(kebabCase, words, map(upperFirst), join(' '));
		name = titleCase(dir.match(/\/([\w-_]+)$/)[1]);
	}
	const allContent = content.toString();
	const [match, title] = allContent.match(/^\#\s(.+)/) || [];
	const contentWithoutTitle = allContent.replace(match, '');
	const renderdMarkdown = marked(contentWithoutTitle);
	const renderd = baseTemplate.render({ 
		content: renderdMarkdown, 
		title: title || name, 
		breadcrumbs: buildBreadCrumbs(dir)
	});
	res.send(renderd);
}
