const fs = require('fs');
const {execSync} = require('child_process');
const {NodeHtmlMarkdown} = require('node-html-markdown');
const fetch = require('node-fetch');

md.use(mk);

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
if ( ! problem || (problem < 0) || (problem > 844) ) {
	console.log('Error:');
	console.log(`   Expected ${problem} to be a number between 0-844.`);
	process.exit(0);
}

const language = process.argv.shift().toLowerCase();
const euler_path = `${__dirname}/eulers/e${problem}/${language}/${username}`;
const euler_short_path = `./eulers/e${problem}/${language}/${username}`;

if ( ! fs.existsSync(euler_path) ) {
	console.log(`    Making ${euler_short_path}...`);
	fs.mkdirSync(euler_path, { recursive: true });
}

if ( ! fs.existsSync(`${euler_path}/README.md`) ) {
	console.log(`    Creating ${euler_short_path}/README.md...`);
	// do nothing
	const resp = await fetch(`https://projecteuler.net/minimal=${problem}`);
	const out  = await resp.text();
	const markdown = NodeHtmlMarkdown.translate(out);

	const content = `
# ${username}'s Euler Solution ${problem} [${language}
This is the solution for @${username}. 

## Problem Description
${markdown}
`;
	try {
		fs.writeFileSync(`${euler_short_path}/README.md`, content);
	} catch(e) {
		console.error('Error: Unable to create README.md');
		console.error(e);
		process.exit(0);
	}
}

console.log(`Euler ready! ${euler_short_path}`);
console.log('Have fun!');
