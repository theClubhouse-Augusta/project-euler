const c = require('ansi-colors');

module.exports = (problem, title, description, euler_short_path) => {
	let line_len = 0;
	let line = [];
	const words = description.split(' ');
	const lines = [];
	let in_latex = false;
	while ( words.length ) { 
		const word = words.shift();
		const line_breaks = word.split('\n');
		in_latex = ((word.split('$').length - 1) % 2) !== 0;
		if ( word.length + line_len < 55 || in_latex || line_breaks.length > 1 ) {
			if ( line_breaks.length > 1 ) {
				for ( let i = 0; i < line_breaks.length; ++i ) {
					if ( line_breaks[i].length + line_len < 55 ) {
						line.push(line_breaks[i]);
						if ( i < line_breaks.length - 1 ) {
							lines.push('    ' + line.join(' '));
							line = [];
							line_len = 0;
						}
					} else {
						lines.push('    ' + line.join(' '));
						line = [];
						line.push(line_breaks[i] + '\n');
						line_len = 0;
					}
				}
			} else {
				line_len += word.length;
				line.push(word);
			}
		} else {
			lines.push('    ' + line.join(' '));
			line = [];
			line.push(word);
			line_len = word.length;
		}
	}
	lines.push('    ' + line.join(' '));
	description = lines.join('\n');
	description = description.replaceAll(/\$(\w+?)\$/ig, c.blueBright.bold('$1'));
	title = c.yellowBright(title.replaceAll(/\$(\w+?)\$/ig, c.blueBright.bold('$1')));

	console.log(`Euler ready! ${euler_short_path}`);
	console.log('\n-------------------------------------------------------------------------');
	console.log(c.yellow(`${problem}. ${title}`));
	console.log(description);
	console.log('-------------------------------------------------------------------------');
	console.log(`Check Solution:\n    ${c.bold.underline(`https://projecteuler.net/problem=${problem}`)}`);
	console.log(`\nRun this:\n    ${c.yellow.bold(`cd ${euler_short_path}`)}`);
	console.log('-------------------------------------------------------------------------\n');
	console.log(c.blue.bold('#########################################################################'));
	console.log(c.blue.bold('#                                                                       #'));
 	console.log(c.blue.bold(`#                             ${c.yellowBright.bold.underline('HAVE FUN!')}                                 #`));
	console.log(c.blue.bold('#                                                                       #'));
	console.log(c.blue.bold('#########################################################################\n'));
};
