const util = require('util')
const path = require('path');
const pullAll = require('lodash/pullAll');
const markdownRenderer = require('../lib/markdown-renderer');
const selectorsExamplesRenderer = require('../lib/selectors-examples-renderer');
const glob = util.promisify(require('glob'));
const mkdirp = util.promisify(require('mkdirp'));
const writeFile = util.promisify(require('fs').writeFile);

const rootFolder = path.resolve(__dirname, '..');
const notesFolder = path.resolve(__dirname, '..', 'notes');
const buildFolder = path.resolve(__dirname, '..', 'build');

const saveContent = (path, content) => writeFile(path, content);
const renderSelectorsExamples = renderFile(selectorsExamplesRenderer);
const renderMarkdown = renderFile(markdownRenderer);

function replaceReadMeForIndex(content) {
	return content
		.replace(/README.md/g, '')
		.replace(/\.md/g, '.html');
}

function renderFile(renderer) {
	return function (filePath) {
		return new Promise((resolve, reject) => {
			const relative = path.relative(notesFolder, filePath);
			const parentFolder = /^\.\./.test(relative) ? 'notes' : '';
			const outputFile = path.join(buildFolder, parentFolder, relative)
				.replace('.md', '.html')
				.replace('README', 'index');
			const { dir:outputDir } = path.parse(outputFile);

			const reqObj = {fileToRender: relative}
			const resObj = {send: content => {
					mkdirp(outputDir)
						.then(() => writeFile(outputFile, replaceReadMeForIndex(content)))
						.then(resolve)
						.catch(reject);
				}
			}

			renderer(reqObj, resObj)
				.catch(reject)
		})
	}
}

async function run () {
	const rootReadme = await glob(`${rootFolder}/README.md`);
	const notesContent = await glob(`${notesFolder}/**/*.md`);
	const allContent = [...rootReadme, ...notesContent];
	const selectorsExamples = await glob(`${notesFolder}/css/selectors/examples/**/*.md`);
	const markdownContent = pullAll(allContent, selectorsExamples);

	selectorsExamples.map(renderSelectorsExamples);
	markdownContent.map(renderMarkdown);
}

run();
