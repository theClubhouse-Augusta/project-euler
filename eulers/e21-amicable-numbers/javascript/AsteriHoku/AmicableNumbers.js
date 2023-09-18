
function d(num){
	let a = 0n;
	let max = num;
	let sum = 1n;					//accounts for 1 as a divisor

	for (let i = 2n; i < max; ++i){	//starting at 2 to ensure that we do not count the num itself
		a = (num / i);
		if (num % i == 0) {
			sum += i != a ? i + a : i;
			max = num / i; 			//set max to the larger divisor, shrinks search area
		}
	}

	return sum;
}

function getAmiNums(max) {
	let sum = 0n;
	for (let i = 1n; i < max; ++i){
		let da = d(i);
		if (d(da) == i && da != i){	//ie if d(220) = 284 and 220 != 284
			sum += i + da;			//add the amicable pair numbers
			i = da;					//set index to larger amicable pair, this reduces search area and
									//ensures that amicable pair numbers are not double added
		}
	}
	return sum;
}

let test0 = d(284n);
let test1 = d(220n);
console.assert(test0 == 220, 'd(284) should be equal to 220');
console.log("test0 passing");
console.assert(test1 == 284, 'd(220) should be equal to 284');
console.log("test1 passing");

const num = 10000n;//TODO define your number here
let ans = getAmiNums(num);
console.log(`Answer for ${num} is ${ans}`);
