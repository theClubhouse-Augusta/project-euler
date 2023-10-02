const RFG_COLORS = ['31','33','32','36','34','35'];

function rainbowifyString(str){
	let [fgs, ic] = ['', 0];
	for (let i = 0; i < str.length; ++i) {
		if (str[i] === ' '){
			fgs += ' ';
		} else {
			fgs += `\u001b[${RFG_COLORS[ic]}m${str[i]}`;
			ic++;
		}
		if (ic === RFG_COLORS.length) ic = 0;
	}
	return `\u001b[0m${fgs}\u001b[0m`;
}

function binarifyString(str){
	var output = str.split('').map(char => {
		return char.charCodeAt(0).toString(2);
	}).join(' ');
	return output;
}

module.exports = {
	rainbowifyString,
	binarifyString
}