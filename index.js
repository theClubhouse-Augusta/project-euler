const fs                 = require('fs');
const {execSync}         = require('child_process');
const {NodeHtmlMarkdown} = require('node-html-markdown');
const fetch              = require('node-fetch');
const readlineSync       = require('readline-sync');
const c                  = require('ansi-colors');

// tool-specific helpers
const setup         = require('./core/setup');
const finish_euler  = require('./core/finish');
const create_readme = require('./core/create_readme');
const problems      = require('./core/problems');

// fun interactive setup
let { username, initialize_at_one } = setup();

let problem  = null;

process.argv.shift(); // node|bun
process.argv.shift(); // index.js

if ( process.argv.length === 1 && process.argv[0].includes('help') ) {
	console.log('Usage: ');
	console.log('    bun index.js EULER_PROBLEM ENVIRONMENT_or_LANGUAGE');
	console.log('    npm run euler EULER_PROBLEM ENVIRONMENT_or_LANGUAGE');
	process.exit(0);
} else if (process.argv.length >= 1) {
	const problem_arg = parseInt(process.argv.shift().replace(/^\D+/g,'')); // force int
	if ( problem_arg && problem_arg in problems ) {
		problem = problem_arg;
	}
}

let language = null;
try {
	language = execSync('git config --get user.defaultenv').toString().trim().replaceAll("'",'').replaceAll('"','');
} catch(_e) { 
	language = null;
}
// env/lang provided?
let lang_from_args = false;
if ( process.argv.length ) {
	language = process.argv.shift().trim();
	lang_from_args = true;
}

if ( initialize_at_one && ! problem ) {
	problem = 1;
}

if ( ! problem ) {
	let loop = true;
	while ( loop ) {
		const which_problem = readlineSync.question('Enter a Project Euler problem # you want to solve: ');
		if ( which_problem.includes('q') ) {
			loop = false;
			process.exit(0);
		} 
		const num = parseInt(which_problem);
		if ( isNaN(num) ) {
			loop = false;
			process.exit(0);
		} else if ( num in problems ) {
			loop = false;
			problem = num;
		} else {
			console.log(`${c.bold('Invalid problem number')}. Please enter a number between ${c.bold('1')} and ${c.bold(Object.keys(problems).length)}.`)
		}
	}
}

if ( ! language ) {
	let loop = true;
	while ( loop ) {
		const which_env = readlineSync.question(`What language or environment will you be using? [${c.white('"[q]uit" to exit')}]\n${c.yellow('> ')}`).trim();
		if ( which_env.toLowerCase() === 'quit' ) {
			loop = false;
			process.exit(0);
		} 
		if ( which_env.length ) {
			loop = false;
			language = which_env.toLowerCase();
		}
	}
} else if ( ! lang_from_args ) {
	const which_env = readlineSync.question(`What language or environment will you be using? [default=${c.cyan(language)}, ${c.white('[q]uit to exit')}]\n${c.yellow('> ')}`).trim();
	if ( which_env === 'quit' || which_env === 'q' ) {
		process.exit(0);
	} else if ( which_env === 'default' || which_env === 'd' || which_env === '' ) {
		console.log(`    Using default (${c.cyan(language)}).`);
	}
}

const safename    = problems[problem].replaceAll(' ','-')
	.replaceAll('$','')
	.toLowerCase();

if ( username.includes('"') || username.includes("'") ) {
	username = username.replaceAll('"','').replaceAll("'",'');	
}

const problem_path = `eulers/e${problem}-${safename}`;
const language_path = `${problem_path}/${language}`;
const user_path = `${language_path}/${username}`;

// create a new branch
let create_branch = false;
try {
	const git_checkout = execSync(`git checkout ${problem}-${username}-${language}`).toString().trim();
	if ( git_checkout.includes(`Switched to branch '${problem}-${username}-${language}'`) ) {
		console.log(`Switched to branch '${c.bold.yellow(`${problem}-${username}-${language}`)}`);
	} 
} catch(e) {
	if ( e.toString().includes(`${problem}-${username}-${language}' did not match`) ) {
		create_branch = true;
	}
}

if ( create_branch ) {
	console.log('---- CREATE BRANCH ----');
	try {
		const git_checkout_new = execSync(`git checkout -b ${problem}-${username}-${language}`).toString().trim();
	} catch(e) {
		console.error(`${c.red('ERROR')}: Unknown git error.`);
		console.log(e);
		process.exit(0);
	}
}

fetch(`https://projecteuler.net/minimal=${problem}`)
	.then(data => data.text())
	.then(html => {
		const markdown = NodeHtmlMarkdown.translate(html);

		const user_content = create_readme('user', {
			username: username,
			problem: problem,
			language: language,
			markdown: markdown
		});
	
		// now that we have our euler content,
		// finish processing the folders
		if ( ! fs.existsSync(`${__dirname}/${user_path}`) ) {
			console.log(`    Making ./${user_path}...`);
			fs.mkdirSync(`${__dirname}/${user_path}`, { recursive: true });
		}

		const submissions = fs
			.readdirSync(`${__dirname}/eulers/`, {
				withFileTypes: true,
			})
			.filter(dirent => dirent.isDirectory())
			.map(dir => { 
				const problem = parseInt(dir.name.split('-')[0].replace('e',''));
				return {
					problem: problem,
					folder: dir.name,
					dir: `${dir.path}${dir.name}`,
				}
			});

		const languages = fs
			.readdirSync(`${__dirname}/${problem_path}`, { withFileTypes: true })
			.filter(dirent => dirent.isDirectory())
			.map(dirent => dirent.name);

		const language_users = {};
		for ( let i = 0; i < languages.length; ++i ) {
			const lang_path = `${__dirname}/${problem_path}/${languages[i]}`;
			const users = fs
				.readdirSync(lang_path, { withFileTypes: true })
				.filter(dirent => dirent.isDirectory())
				.map(dirent => dirent.name);
			language_users[ languages[i] ] = users;
		}

		const readme_content = create_readme('euler_readme', {
			submissions: submissions,
		});

		const problem_content = create_readme('problem', {
			problem: problem,
			markdown: markdown,
			languages: language_users,
		});

		const language_content = create_readme('language', {
			problem: problem,
			markdown: markdown,
			language: language,
			language_users: language_users[ language ],
		});

		// write e README
		try {
			fs.writeFileSync(`${__dirname}/eulers/README.md`, readme_content);
			console.log(`     Updating README: ./eulers/README.md`);
			fs.writeFileSync(`${__dirname}/${problem_path}/README.md`, problem_content);
			console.log(`     Updating ./${problem_path}/README.md...`);
			fs.writeFileSync(`${__dirname}/${language_path}/README.md`, language_content);
			console.log(`     Updating ./${language_path}/README.md...`);
		} catch(e) {
			console.error(e);
			console.error('ERROR: Unable to create Euler/Language READMEs');
			process.exit(0);
		}

		// write language README
		if ( ! fs.existsSync(`${__dirname}/${user_path}/README.md`) ) {
			console.log(`    Creating ./${user_path}/README.md...`);
			// do nothing
			try {
				fs.writeFileSync(`${__dirname}/${user_path}/README.md`, user_content);
			} catch(e) {
				console.error('ERROR: Unable to create README.md');
				console.error(e);
				process.exit(0);
			}

			finish_euler(problem, problems[problem], markdown, `./${user_path}`);
		} else {
			finish_euler(problem, problems[problem], markdown, `./${user_path}`);
		}
}); // end of "fetch" to retrieve the content from projecteuler.net
