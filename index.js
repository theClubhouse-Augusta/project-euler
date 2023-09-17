const fs                 = require('fs');
const {execSync}         = require('child_process');
const {NodeHtmlMarkdown} = require('node-html-markdown');
const fetch              = require('node-fetch');
const readlineSync       = require('readline-sync');
const c                  = require('ansi-colors');

// tool-specific helpers
const setup         = require('./setup');
const create_readme = require('./create_readme');
const problems      = require('./problems');

// fun interactive setup
const { username, initialize_at_one } = setup();

function finish_euler(euler_short_path) {
	console.log(`Euler ready! ${euler_short_path}`);
	console.log('Have fun!');
}

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
	language = execSync('git config --get user.defaultenv').toString().trim();
} catch(_e) { 
	language = null;
}

// env/lang provided?
if ( process.argv.length ) {
	language = process.argv.shift();
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
		const which_env = readlineSync.question(`What language or environment will you be using? [${c.gray('quit to exit')}]\n${c.yellow('> ')}`).trim();
		if ( which_env.toLowerCase() === 'quit' ) {
			loop = false;
			process.exit(0);
		} 
		if ( which_env.length ) {
			loop = false;
			language = which_env.toLowerCase();
		}
	}
}

const safename    = problems[problem].replaceAll(' ','-')
	.replaceAll('$','')
	.toLowerCase();

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
	try {
		const git_checkout = execSync(`git checkout -b ${problem}-${username}-${language}`).toString().trim();
		console.log(`"${git_checkout}"`);
		if ( git_checkout != `Switched to a new branch '${problem}-${username}-${language}'` ) {
			console.error(`${c.red('ERROR')}: Could not create new git branch.`);
			console.log(git_checkout);
			process.exit(0);
		}
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

		const submissions = {
			problems  : {},
			solutions : {},
			languages : {},
			users     : {},
		};
		submissions.problems = fs
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
		for ( let i = 0; i < submissions.problems.length; ++i ) {
			const prob  = submissions.problems[i];
			const langs = fs.readdirSync(`${prob.dir}`, { withFileTypes: true })
				.filter(dir => dir.isDirectory())
				.map(dir => {
					if ( dir.name in submissions.languages ) {
						submissions.languages[dir.name].count++;
					} else {
						submissions.languages[dir.name] = { count: 1, max: null, max_user: null};
					}
					return { language: dir.name, dir: `${dir.path}/${dir.name}` };
				});

			for ( let l = 0; l < langs.length; ++l ) {
				const solves = fs.readdirSync(langs[l].dir, { withFileTypes: true })
					.filter(dir => dir.isDirectory())
					.map(dir => {
						if ( dir.name in submissions.users ) {
							submissions.users[dir.name].count++;
							if ( langs[l].language in submissions.users[dir.name].languages ) {
								submissions.users[dir.name].languages[langs[l].language]++;
							} else {
								submissions.users[dir.name].languages[langs[l].language] = 1;
							}
						} else {
							submissions.users[dir.name] = {
								count: 1,
								languages: {},
							};
							submissions.users[dir.name].languages[langs[l].language] = 1;
						}
					});
			}
			for ( const username in submissions.users ) {
				const user = submissions.users[username];
				for ( let lang in user.languages ) {
					if ( user.languages[lang] > submissions.languages[lang].max ) {
						submissions.languages[lang].max      = user.languages[lang];
						submissions.languages[lang].max_user = username;
					}
				}
			}
		}

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

		const leaderboard_content = create_readme('leaderboard', {
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
			fs.writeFileSync(`${__dirname}/eulers/README.md`, leaderboard_content);
			console.log(`     Updating Leaderboard: ./eulers/README.md`);
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

			finish_euler(`./${user_path}`);
		} else {
			finish_euler(`./${user_path}`);
		}
}); // end of "fetch" to retrieve the content from projecteuler.net
