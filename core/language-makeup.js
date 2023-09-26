//computes makeup of languages used to solve eulers
//based on file type
//called by index.js

const c = require('ansi-colors');
const fs = require('fs');
const path = require('path');
const extensions = require('./lang-extensions-dict');

function computeEulersFolder() {
	const folderPath = `${path.resolve(__dirname, '..')}/eulers`;
	let metrics = [{
		eulerCount: 0,
		langFileCount: 0,
		langCount: 0,
		lang: '',
		fileCount: 0,
		users: ''
	}];

	try {
		metrics = tryGetFolderContents(folderPath, metrics);
		metrics[0].totalLangCount = metrics.length - 1;
		metrics[0].totalFileCount = metrics.reduce((accumulator, item) => {
			return accumulator + item.fileCount;
		}, 0);
		metrics.sort((a, b) => b.fileCount - a.fileCount);
		//todo sarah can use metrics?
		//maybe just create code to add here and run separately myself with `node language-makeup.js`

		console.log(c.cyan(`!!!THERE HAVE BEEN ${c.yellow.bold(`${metrics[metrics.length - 1].eulerCount}`)} EULER PROBLEMS SOLVED IN ${c.yellow.bold(`${metrics.length - 1}`)} DIFFERENT LANGUAGES!!!`));
		console.log(c.cyan(`  ??? CAN YOU COMPLETE A EULER IN A ${c.yellow.bold('NEW LANGUAGE')} ???`));
		console.log(c.blue("    Below:  # of files per language used to solve Euler problems,"));
		console.log(c.blue("            + users who used that language + how many times they used it"));
		console.log();

		for (let i = 0; i < metrics.length - 1; ++i) {
			console.log(c.yellow(`${metrics[i].fileCount} ${c.cyan(`${metrics[i].lang} files -`)} ${c.blue(' users:')} ${c.green(`${metrics[i].users}`)}`));
		}

	} catch (err) {
		console.error('Error:', err);
	}
}

function tryGetFolderContents(folderPath, metrics) {
	const folderContents = fs.readdirSync(folderPath);

	folderContents.forEach((item) => {
		const itemPath = path.join(folderPath, item);

		if (path.basename(itemPath).toLowerCase().startsWith('e') && !isNaN(parseInt(path.basename(itemPath)[1])))
			metrics[0].eulerCount++; //count euler folders
		if (fs.statSync(itemPath).isDirectory()) {
			tryGetFolderContents(itemPath, metrics);
		} else {
			const fileExtension = path.extname(itemPath).toLowerCase();
			// should work for posix and win32
			const pathPieces = itemPath.split(path.sep);
			const username = pathPieces[pathPieces.length - 2];

			if (extensions[fileExtension]) {
				if (pathPieces[pathPieces.length - 4].toLowerCase().startsWith('e')) {
					if (metrics.some(item => item.lang.toLowerCase() === extensions[fileExtension].toLowerCase())) {
						metrics.forEach(item => {
							if (item.lang === extensions[fileExtension]) {
								item.fileCount++;
								if (!item.users.includes(username)) {
									item.users += `, ${username} 1`;
								} else {
									let users = item.users.split(',').map(user => user.trim());
									let foundUser = users.find(user => user.trim().split(' ')[0].startsWith(username));
									let ui = users.indexOf(foundUser);
									users[ui] = ` ${username} ${parseInt(foundUser.trim().split(' ')[1]) + 1}`;
									item.users = users.toString();
								}
							}
						});
					} else {
						metrics.push({lang: extensions[fileExtension], fileCount: 1, users: `${username} 1`});
					}
				}
			}
		}
	});
	return metrics;
}
//TODO SARAH
//tie into leaderboard process so they can both run
//combine metrics into leaderboard.md if wanted
//this will be overwriting the file each time so put safeguards in place
//computed as a background job?

function getUnusedLanguages(){
	let langsUsed = [];
	let langsNotUsedDict = {};
	const folderPath = `${path.resolve(__dirname, '..')}/eulers`;
	const extLangArray = Object.entries(extensions);
	
	try {
		langsUsed = getFolderLanguages(folderPath, langsUsed);
		langsNotUsedDict = extLangArray.filter(([key, value]) => !langsUsed.includes(key));
		console.log(`Test - C#|Smalltalk should be in used array: ${c.greenBright(`${langsUsed.includes('C#|Smalltalk')}`)}`);
		console.log(`Test - C# ext .cs should not be in unused dict: ${c.greenBright(`${langsNotUsedDict['.cs'] === undefined}`)}`);
		console.log(`Test - JavaScript should be in used array: ${c.greenBright(`${langsUsed.includes('JavaScript')}`)}`);
		console.log(`Test - JavaScript ext .js should not be in unused dict: ${c.greenBright(`${langsNotUsedDict['.js'] === undefined}`)}`);
		// console.log('----LANGS USED----');
		// console.log(langsUsed);
		// console.log('----LANGS NOT USED DICT----');
		// console.log(langsNotUsedDict);
		
		const dictSavePath = `${path.resolve(__dirname, 'unused-langs-dict.js')}`;
		const writeStream = fs.createWriteStream(dictSavePath);
		writeStream.write('const unusedLangsDict = {' + '\n');
		
		for (let i = 0; i < langsNotUsedDict.length; ++i) {
			const value = langsNotUsedDict[i].toString().split(',');
			writeStream.write(`	'${value[0]}': '${value[1]}',` + '\n');
		}
		
		writeStream.write('};\n\nmodule.exports = unusedLangsDict;');
	} catch (err) {
		console.error('Error:', err);
	}
}
function getFolderLanguages(folderPath, langsUsed){
	const folderContents = fs.readdirSync(folderPath);

	folderContents.forEach((item) => {
		const itemPath = path.join(folderPath, item);
		
		if (fs.statSync(itemPath).isDirectory()) {
			getFolderLanguages(itemPath, langsUsed);
		} else {
			const fileExtension = path.extname(itemPath).toLowerCase();
			// should work for posix and win32
			const pathPieces = itemPath.split(path.sep);

			if (extensions[fileExtension]) {
				if (pathPieces[pathPieces.length - 4].toLowerCase().startsWith('e') && !isNaN(parseInt(pathPieces[pathPieces.length - 4][1]))) {
					if (!langsUsed.includes(extensions[fileExtension]))
						langsUsed.push(extensions[fileExtension]);
				}
			}
		}
	});
	return langsUsed;
}

//
// module.exports = {
// 	computeEulersFolder,
// }

// computeEulersFolder()

getUnusedLanguages()