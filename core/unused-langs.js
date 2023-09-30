//get a list of 3 random unused langs
//todo group by whether they're like possible to solve a euler in??
const c = require('ansi-colors');
const colors = require('colors');
const dict = require('./unused-langs-dict');

function getUnusedLangs() {
	console.log('\nHere are 3 suggestions for languages not yet used to solve an euler!'.random);
	console.log('Note: your solution must include a file with the file extension listed\n'.cyan);

	const langs = Object.keys(dict).sort(() => Math.random() - 0.5);
	if (langs.length === 0)
		return null;
	
	for ( let i = 0; i < 3; ++i ) {
		const ext = langs.pop(); // unique
		console.log(`   ${dict[ext].green} language - file extension ${ext.green}`);
	}
	
	console.log('\nDo your best and BE AMAZING!'.random);
}

getUnusedLangs();