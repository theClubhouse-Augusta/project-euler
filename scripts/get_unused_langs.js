//get a list of 3 random unused langs

const colors = require('colors');
const dict = require('../core/unused-langs-dict');
const {rainbowifyString, binarifyString} = require('../core/asteri-rainbows');

console.log('Here are 3 suggestions for languages not yet used to solve an euler!'.random);
console.log('Note: your solution must include a file with the file extension listed\n'.cyan);

const langs = Object.keys(dict).sort(() => Math.random() - 0.5);
if (langs.length === 0)
	return null;

for (let i = 0; i < 3; ++i) {
	const ext = langs.pop(); // unique
	console.log(`   ${dict[ext].green} language - file extension ${ext.green}`);
}

console.log(`\n${'Do your best and BE AMAZING!'.random} ${rainbowifyString(binarifyString('HI MOM'))}`);