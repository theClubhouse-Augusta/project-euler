//NOTE this one is a little wild and crazy, I'm not sure the state I left it in, 
//but wanted to port it into theClubhou.se eulers anyway


console.log();

// #region consts

const RFG_COLORS = ['31','33','32','36','34','35'];

const dict = {
	0: 0,
    1: "one".length,
    2: "two".length,
    3: "three".length,
    4: "four".length,
    5: "five".length,
    6: "six".length,
    7: "seven".length,
    8: "eight".length,
    9: "nine".length,
    10: "ten".length,
    11: "eleven".length,
    12: "twelve".length,
    13: "thirteen".length,
    14: "fourteen".length,
    15: "fifteen".length,
    16: "sixteen".length,
    17: "seventeen".length,
    18: "eighteen".length,
    19: "nineteen".length,
    20: "twenty".length,
    30: "thirty".length,
    40: "forty".length,
    50: "fifty".length,
    60: "sixty".length,
    70: "seventy".length,
    80: "eighty".length,
    90: "ninety".length,
    100: "hundred".length,
    1000: "thousand".length
  };

  const numNamesDict = {
	0: 0,
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand"
  };

  const namesDict = {
	"0": "",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "hundred",
    "1000": "thousand"
  };

  function rainbowifyString(str){
    let [fgs, ic] = ['', 0];
    
    for (let i = 0; i < str.length; ++i)
    {
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

// #endregion


//OPTION COUNT CLEAN CODE:

// #region Count TLDR

let ct;
let overall_ct;
for (let i = 1; i <= 1000; ++i) {
    overall_ct += getWordCount(i);
}

function getWordCount(num){
    if (num <= 20){
        addInt(num);
    }

    if (num > 20 && num < 100){;
        let s = num.toString();
        ct += dict[parseInt(`${s[0]}0`)];
        addInt(parseInt(s[1]));
    }

    if (num === 100){
        ct += dict[1] + dict[100];
    }

    if (num >= 101 && num <= 999){
	    let s = num.toString();
	    ct += dict[parseInt(`${s[0]}`)];
	    ct += dict[100];

	    let tens = parseInt(`${s[1]}${s[2]}`);
	    if (tens >= 10 && tens <= 20){
            ct += 3; // "and"
		    addInt(tens);
	    } else if (tens != 0) {
		    ct += dict[parseInt(`${s[1]}0`)];
            ct += 3; // "and"
		    addInt(parseInt(s[2]));
	    }
    }

    if (num === 1000){
        ct += dict[1] + dict[1000];
    }

    return ct;
}

function addInt(int){
	ct += dict[int];
}

console.log();
console.log(`~*~*~*~ Congratulations you made it to the end and ans is ${overall_ct} ~*~*~*~`);

// #endregion


//OPTION COUNT WITH LOGS:

// #region Count With Logs

let count;
let overall_count = 0;
for (let i = 1; i <= 1000; ++i) {
    count = 0;
    overall_count += getWordCount(i);
}

function getWordCount(num){
    if (num <= 20){
        let str = rainbowifyString(`     Logic for ${num}`);
        console.log(str);
        addAsInt(num);
    }

    if (num > 20 && num < 100){
        let str = rainbowifyString(`     Logic for ${num}`);
        console.log(str);
        let s = num.toString();
        count += dict[parseInt(`${s[0]}0`)];
        let tens = parseInt(`${s[0]}0`);
        console.log(`Adding "${namesDict[tens]}" +${dict[tens]} to count => ${count}`);
        addAsInt(parseInt(s[1]));
    }

    if (num === 100){
        count += dict[1] + dict[100];//one hundred
        console.log(`     Logic for 100 - added "${namesDict[1]}" +${dict[1]} and "${namesDict[100]}" +${dict[100]} to count => ${count}`);
    }

    if (num >= 101 && num <= 999){
	    let str = rainbowifyString(`     Logic for ${num}`);
        console.log(str);
	    let s = num.toString();
	    count += dict[parseInt(`${s[0]}`)];
	    count += dict[100];

    	let huns = parseInt(`${s[0]}`);
    	console.log(`Adding "${namesDict[huns]}" +${dict[huns]}, "hundred" +${dict[100]}, to count => ${count}`);

	    let tens = parseInt(`${s[1]}${s[2]}`);
	    if (tens >= 10 && tens <= 20){
            count += 3; // "and"
            console.log(`Adding "and" +3`);
		    addAsInt(tens);
	    } else if (tens != 0) {
		    let ts = parseInt(`${s[1]}0`);
		    count += dict[parseInt(`${s[1]}0`)]; //tens like "fifty"
            console.log(`Adding "${namesDict[ts]}" +${dict[ts]} to count => ${count}`);
            count += 3; // "and"
            console.log(`Adding "and" +3 to count => ${count}`);
		    addAsInt(parseInt(s[2]));
	    }
    }

    if (num === 1000){
        count += dict[1] + dict[1000];//one thousand
        console.log(`     Logic for 1000 - added "${namesDict[1]}" +${dict[1]} and "${namesDict[1000]}" +${dict[1000]} to count => ${count}`);
    }

    return count;
}

function addAsInt(int){
	count += dict[int];
	console.log(`Adding "${namesDict[int]}" +${dict[int]} to count => ${count}`);
}

console.log();
console.log(`~*~*~*~ Congratulations you made it to the end and ans is ${overall_count} ~*~*~*~`);

// #endregion


//OPTION BUILD EACH STRING:

// #region Strings

//TODO set number here
const num = 1200;

//COMMENT TOGGLE OPTION single option
let numString = getString(num);
console.log(`${rainbowifyString("Number was " + numString)}`);

//COMMENT TOGGLE OPTION range option
for (let i = 1; i <= num; ++i){
    let numString = getString(i);
    console.log(numString);
}

function getString (num) {
    let ns = num.toString().split('');

    if (ns.length === 3){
        if (ns[1] === '0' && ns[2] === '0'){//100 200 etc
            ns[0] = `${namesDict[ns[0]]}hundred`;
            ns.pop();
            ns.pop();
            return ns;//todo sarah return join later
        } else {
            ns[0] = `${namesDict[ns[0]]}hundredand`;
        }
    }

    if (ns.length === 4){
        if (ns[1] === '0' && ns[2] === '0' && ns[3] === '0'){//1000 2000 etc
            ns[0] = `${namesDict[ns[0]]}thousand`;
            ns.pop();
            ns.pop();
            ns.pop();
            return ns;//todo sarah return join later
        } else {
            ns[0] = `${namesDict[ns[0]]}thousandand`;
        }
        //todo hundreds
    }

    ns = getTens(ns);
    //return ns.join("").trim(); //TODO SARAH change but for now the printing for array elements is cooler!
    return ns;
}

function getTens(ns){
    if (ns.length === 1){ //single digits
        ns[0] = namesDict[ns[0]];
        return ns;
    }

    let isTeen = ns[ns.length - 2] == 1;

    if (isTeen){
        let tail = ns.pop();
        ns[ns.length - 1] = namesDict[`${ns[ns.length - 1]}${ns.pop()}`];
        return ns;
    }
    
    if (ns[ns.length - 2] === '0') {//101 202 etc
        ns[ns.length - 2] = namesDict[ns[ns.length - 1]];
        ns.pop();
    } else {
        ns[ns.length - 2] = namesDict[`${ns[ns.length - 2]}0`];
        ns[ns.length - 1] = namesDict[ns[ns.length - 1]];
    }
    return ns;
}

// #endregion