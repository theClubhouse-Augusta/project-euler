const problems = require('./problems');

// simple function to create the README files and keep
// index.js clean.
function create_readme(readme_type, readme_data) {
	// user creates the top-level README.md file in 
	// ./eulers/${problem}/${language}/${user}
	if ( readme_type === 'user' ) {
		const problemname = problems[readme_data.problem];
		const username = readme_data.username;
		const problem = readme_data.problem;
		const language = readme_data.language;
		const markdown = readme_data.markdown;
		return `
# ${username} - ${problem}. ${problemname}
## Euler Solution in ${language}
https://projecteuler.net/problem=${problem} 

This is the Project Euler solution for [${problem}. ${problemname}](https://projecteuler.net/problem=${problem})
written by ${username} in ${language}.

## Problem Description
${markdown}
`;
	
	// problem creates the top-level README.md file in eulers/${problem}
	} else if ( readme_type === 'problem' ) {
		const problemname = problems[readme_data.problem];
		const problem   = readme_data.problem;
		const markdown  = readme_data.markdown;
		const languages = readme_data.languages;
		
		let output = `
# Solutions for ${problem}. - ${problemname}
## Problem Description
https://projecteuler.net/problem=${problem}

${markdown}

## Languages
`;

		for ( const lang in languages ) {
			output += `### ${lang}\n`;
			const users = languages[lang];

			for ( let i = 0; i < users.length; ++i ) {
				output += `- [${users[i]} ${lang}'s Solution](${users[i]}), Author: [@${users[i]}](https://github.com/${users[i]})\n`; 
			}
		}
	
		return output;
	
	// language creates the top-level README.md file in eulers/${problem}/${language} 
	} else if ( readme_type === 'language' ) {
		const problemname    = problems[readme_data.problem];
		const problem        = readme_data.problem;
		const markdown       = readme_data.markdown;
		const language       = readme_data.language;
		const language_users = readme_data.language_users;
		
		let output = `
# ${language} Solutions for ${problem}. ${problemname}
## Problem Description
${markdown}

## Contributors
`;

		for ( let i = 0; i < language_users.length; ++i ) {
			output += `- [${language_users[i]}'s Solution](${language_users[i]}), Author: [@${language_users[i]}](https://github.com/${language_users[i]})\n`; 
		}
	
		return output;
	
	// usage_leaderboard creates the top-level LEADERBOARD.md file in eulers/ 
	} else if ( readme_type === 'usage_leaderboard' ) {
		const submissions = readme_data.submissions;

		let output = `# theClubhou.se Project Euler Collaboration Repository
## Submissions Leaderboard
`;
		const clean = process_submissions(submissions);

		for ( const user in clean.leaderboard ) {
			output += `1. @${user} **${clean.leaderboard[user]}** entries\n`;
		}

		output += '\n# Popular Languages\n';

		const languages = Object.keys(clean.languages)
			.sort((a,b) => clean.languages[b].count - clean.languages[a].count);
		for ( let i = 0; i < languages.length; ++i ) {
			output += `1. **${languages[i]}** with **${clean.languages[languages[i]].count}** entries [leader: @${clean.languages[languages[i]].max_user} - ${clean.languages[languages[i]].max}]\n`;
		}
		
		return output;
	
	// euler_readme creates the top-level README.md file in eulers/ 
	} else if ( readme_type === 'euler_readme' ) {
		const submissions = readme_data.submissions;
		let output = '# Welcome to theClubhou.se Project Euler Solutions Listing\n';
		output += '## Leaderboard\n';
		output += 'The full project leaderboard is in [LEADERBOARD.md](LEADERBOARD.md).\n';
		output += '## Solutions\n';
		const solves = {};
		for ( let i = 0; i < submissions.length; ++i ) {
			solves[submissions[i].problem] = submissions[i];
		}
		for ( let num in problems ) {
			num = parseInt(num);
			let solved = ' '; // empty space creates checkbox
			let name_or_link = problems[num];
			if ( num in solves ) {
				solved = 'x';
				name_or_link = `[${problems[num]}](./${solves[num].folder}/)`;
			}
			output += `- [${solved}] ${name_or_link}\n`;
		}
		return output;
	}

}

function process_submissions(submissions) {
	const processed = {
		leaderboard: {},
		languages: submissions.languages,
		problems: submissions.problems,
	};
	const sorted = Object.keys(submissions.users)
		.sort((a,b) => {
			return submissions.users[b].count - submissions.users[a].count;
		});
	for ( let i = 0; i < sorted.length; ++i ) {
		processed.leaderboard[sorted[i]] = submissions.users[sorted[i]].count;
		if ( i >= 9 ) {
			break;
		}
	}

	return processed;
}
		
module.exports = create_readme;
