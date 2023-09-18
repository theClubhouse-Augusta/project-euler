const bigNum = 100n;//TODO define your number here 

function getFactorial(n) {
	n = BigInt(n);
	if (n === 0n || n === 1n) return 1;
	return n * BigInt(getFactorial(n - 1n));//recursion
}

function sumOfDigits(longNum) {
	return longNum.toString().split('').map(Number)
	  .reduce((sum, digit) => sum + digit, 0);
}

let ans = sumOfDigits(getFactorial(bigNum));
console.log(`Sum of digits for ${bigNum}! gives answer ${ans}`);