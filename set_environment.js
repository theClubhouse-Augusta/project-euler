const readlineSync = require('readline-sync');
const {execSync}   = require('child_process');
const c            = require('ansi-colors');

console.log(c.bold('Default Environment Configuration'));
console.log('----------------------------------------------------');
console.log('When you want to work on an Euler problem, you will prepare');
console.log(`the environment by running: \n\n${c.bold('npm run euler $Number $Environment')}`);
console.log('Examples:');
console.log(`    \$ ${c.gray('npm run euler 5 javascript')}`);
console.log(`    \$ ${c.gray('npm run euler 68 arduino')}`);
const set_default = readlineSync.question(`\nDo you want to set a default environment? (${c.bold('[y]es')} / [n]o) `);

if ( set_default.includes('n') ) {
	console.log('\nOk. If you want to set a default environment in the future,');
	console.log(`run the command ${c.bold('npm run set_environment')}`);
} else {
	const defaultenv = readlineSync.question(`What default environment would you like? ${c.gray('[ex: javascript, csharp, arduino, react]')}\n${c.yellow('> ')}`).replaceAll(' ','').toLowerCase().trim();
	const errors = execSync(`git config --global user.defaultenv '${defaultenv}'`).toString();
	if ( errors ) {
		console.error(`${c.red.bold('ERROR')}: Could not set user.defaultenv config value.`);
		console.error(errors);
		return process.exit(0);
	}
	console.log('\nSweet! If you want to change your default environment in the future,');
	console.log(`run the command ${c.bold('npm run set_environment')}.`);
	console.log(`\nYour default environment is ${c.bold(defaultenv)}.`)
	console.log(c.gray('You can always override this default by including an environment\nwhen you run the euler command.'));
}
