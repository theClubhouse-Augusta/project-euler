const fs = require('fs');

// tool specific modules
const create_readme = require('../core/create_readme');

function write_leaderboard(username) {
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
			for ( const lang in user.languages ) {
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

	const leaderboard_content = create_readme('usage_leaderboard', {
		submissions: submissions,
	});

	fs.writeFileSync(`${__dirname}/eulers/LEADERBOARD.md`, leaderboard_content);
	console.log(`     Updating LEADERBOARD: ./eulers/LEADERBOARD.md`);
}
