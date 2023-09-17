const fetch = require('node-fetch');
const fs    = require('fs');

console.log("Refreshing problems from https://projecteuler.net/minimal=problems");
const problems = {};
fetch(`https://projecteuler.net/minimal=problems`)
	.then(data => data.text())
	.then(list => {
		const lines = list.split('\n');
		// skip header row
		for ( let i = 1; i < lines.length; ++i ) {
			if ( lines[i].includes('#') ) {
				const sections = lines[i].split('##');
				problems[sections[0]] = sections[1];
			}
		}
		const core_path = __dirname.replace('/scripts/', '/core/');
		fs.writeFileSync(`${core_path}/problems.js`, `module.exports = ${JSON.stringify(problems,null,'\t')};`);
		console.log(`Wrote ${Object.keys(problems).pop()} problems to problems.js`);
	});
