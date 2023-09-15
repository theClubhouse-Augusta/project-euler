// simple function to create the README files and keep
// index.js clean.
function create_readme(readme_type, readme_data) {
	if ( readme_type === 'user' ) {
		const username = readme_data.username;
		const problem = readme_data.problem;
		const language = readme_data.language;
		const markdown = readme_data.markdown;
		return `
# ${username}'s Euler Solution ${problem} [${language}
This is the solution for @${username}. 

## Problem Description
${markdown}
`;
	} else if ( readme_type === 'problem' ) {
		const problem   = readme_data.problem;
		const markdown  = readme_data.markdown;
		const languages = readme_data.languages;
		
		let output = `
# Euler e${problem} Solutions
## Problem Description
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

	} else if ( readme_type === 'language' ) {
		const problem        = readme_data.problem;
		const markdown       = readme_data.markdown;
		const language       = readme_data.language;
		const language_users = readme_data.language_users;
		
		let output = `
# Euler e${problem} Solutions for ${language}
## Problem Description
${markdown}

## Contributors
`;

		for ( let i = 0; i < language_users.length; ++i ) {
			output += `- [${language_users[i]}'s Solution](${language_users[i]}), Author: [@${language_users[i]}](https://github.com/${language_users[i]})\n`; 
		}
	
		return output;
	}

}
		
module.exports = create_readme;
