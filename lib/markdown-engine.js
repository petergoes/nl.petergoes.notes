const fs = require('fs');
const path = require('path');
const marked = require('marked');
const nunjucks = require('nunjucks');
const { kebabCase, words, upperFirst } = require('lodash');
const { map, join, flow } = require('lodash/fp');

const notesFolder = path.resolve(__dirname, '../notes');

const baseTemplateContent = fs.readFileSync(path.join(__dirname, '../lib/templates/_base.html'), 'utf8');
const baseTemplate = nunjucks.compile(baseTemplateContent);

function buildBreadCrumbs(dir) {
	const homeItem = {uri: '/', label: 'home'};
	const dirPath = path.relative(notesFolder, dir)

	if (dirPath === '') {
		return [homeItem];
	}

	let breadcrumbs = dirPath
		.split('/')
		.reduce((list, item) => {
			const lastItem = list[list.length - 1];
			const newItem = {
				uri: `${lastItem.uri}${item}/`,
				label: item
			}
			return list.concat(newItem);
		}, [homeItem]);

	return breadcrumbs;
}

module.exports = function (filePath, options, callback) { // define the template engine
	fs.readFile(filePath, function (err, content) {
		if (err) return callback(err)
		let { name, dir } = path.parse(filePath)

		const breadcrumbs = buildBreadCrumbs(dir);

		if (name === 'index') {
			const titleCase = flow(kebabCase, words, map(upperFirst), join(' '));
			name = titleCase(dir.match(/\/([\w-_]+)$/)[1]);
		}
		const allContent = content.toString();
		const [match, title] = allContent.match(/^\#\s(.+)/) || [];
		const contentWithoutTitle = allContent.replace(match, '');
		const renderdMarkdown = marked(contentWithoutTitle);
		const renderd = baseTemplate.render({ content: renderdMarkdown, title: title || name, breadcrumbs });
		return callback(null, renderd);
	})
}
