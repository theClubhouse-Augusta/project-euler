//get a list of 3 random unused langs
//todo group by whether they're like possible to solve a euler in??

const dict = require('./unused-langs-dict');

function getUnusedLangs() {
	console.log("Here are 3 suggestions for languages not used yet:");
	console.log("Your solution must be in a file with the file extension listed");

	for (let i = 0; i < 3; ++i) {
		getLangs();
	}
}

function getLangs() {
	const langs = Object.values(dict);
	const exts = Object.keys(dict);

	if (langs.length === 0)
		return null;

	const rand = Math.floor(Math.random() * langs.length);
	console.log(`${langs[rand]} language - file extension ${exts[rand]}`);
}