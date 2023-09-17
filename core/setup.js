const readlineSync = require('readline-sync');
const { execSync } = require('child_process');
const c            = require('ansi-colors');

function setup(just_check = false) {
	let initialize_at_one = false;
	let username = null;

	try {
		username = execSync('git config --get user.github').toString().trim().replaceAll("'",'').replaceAll('"','');
	} catch(_e) { 
		if ( just_check ) {
			return { username: false, initialize_at_one: false };
		}
		console.log(c.cyan('####################################'));
		console.log(c.cyan.bold('### theClubhou.se Project Euler ###'));
		console.log(c.cyan('####################################'));
		console.log('\n    Initial setup and instructions.\n'); 
	}
	if ( ! username ) {
		let new_username = readlineSync.question(`Enter your GitHub username. ${c.gray('[ex: @blister or github.com/blister]')}\n${c.yellow('> ')}`);
		if ( new_username.includes('github.com') ) {
			new_username = new_username.split('github.com/')[1];
		}
		new_username = new_username.trim().replace('@', '');
		
		console.log('----------------------------------------------------');
		console.log(`\nThank you, ${c.bold.yellow(`@${new_username}`)}. Setting ${c.bold('user.github')} now...`);
		const errors = execSync(`git config --global user.github '${new_username}'`).toString();
		if ( errors ) {
			console.error(`${c.red.bold('ERROR')}: Could not set user.github config value.`);
			console.error(errors);
			return process.exit(0);
		}

		console.log(c.gray(`    -- git config --global user.github '${new_username}'`));
		console.log('');
		console.log('If you ever need to change your username, please run:');
		console.log(`     ${c.bold('git config --global user.github \'NEW_USERNAME\'')}`);
		console.log('----------------------------------------------------');
		console.log('');
		
		console.log(c.bold('Default Environment'));
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

		console.log(c.bold('Setup Complete!'));
		console.log('----------------------------------------------------');
		const start_now = readlineSync.question(`\nDo you want to start with Project Euler problem #1? (${c.bold('[y]es')} / [n]o) `);
		if ( ! start_now.includes('n') ) {
			initialize_at_one = true;	
		}

		username = new_username;
	}

	return { username: username, initialize_at_one: initialize_at_one };
}

module.exports = setup;
