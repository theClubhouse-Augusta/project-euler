const fs                 = require('fs');
const {execSync}         = require('child_process');
const {NodeHtmlMarkdown} = require('node-html-markdown');
const fetch              = require('node-fetch');

// tool-specific helpers
const create_readme = require('./create_readme');
const problems      = require('./problems');

function get_git_username() {
	try {
		const git_remote = execSync('git remote -v').toString();
		const gh_regex = /github.com(\:|\/)((\w+))\/project-euler/gi;
		const remote = git_remote.match(gh_regex);
		const git_path = remote[1].replace('github.com:','').replace('github.com/','');
		const username = git_path.split('/')[0];
		return username;
	} catch(e) {
		console.error('Error grabbing Github username from `git remote -v`');
		console.error(e);
		process.exit(0);
	}
	
	// should be unreachable
	return false;
}

function finish_euler(euler_short_path) {
	console.log(`Euler ready! ${euler_short_path}`);
	console.log('Have fun!');
}

const username = get_git_username();
console.log('Username is:', username);

if ( process.argv.length < 4 ) {
	console.log('Usage: ');
	console.log('    bun run euler $EULER_PROBLEM $LANGUAGE');
	console.log('    node run euler $EULER_PROBLEM $LANGUAGE');
	process.exit(0);
}

process.argv.shift(); // node|bun
process.argv.shift(); // index.js

const problem = parseInt(process.argv.shift().replace(/^\D+/g, '')); // number
if ( ! problem || ! (problem in problems) ) {
	console.log('Error:');
	console.log(`   Expected ${problem} to be a valid Euler problem ID.`);
	process.exit(0);
}

const safename    = problems[problem].replaceAll(' ','-')
	.replaceAll('$','')
	.toLowerCase();

const language = process.argv.shift().toLowerCase();
const problem_path = `eulers/e${problem}-${safename}`;
const language_path = `${problem_path}/${language}`;
const user_path = `${language_path}/${username}`;

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
			console.error('Error: Unable to create Euler/Language READMEs');
			process.exit(0);
		}

		// write language README
		if ( ! fs.existsSync(`${__dirname}/${user_path}/README.md`) ) {
			console.log(`    Creating ./${user_path}/README.md...`);
			// do nothing
			try {
				fs.writeFileSync(`${__dirname}/${user_path}/README.md`, user_content);
			} catch(e) {
				console.error('Error: Unable to create README.md');
				console.error(e);
				process.exit(0);
			}

			finish_euler(`./${user_path}`);
		} else {
			finish_euler(`./${user_path}`);
		}
}); // end of "fetch" to retrieve the content from projecteuler.net
