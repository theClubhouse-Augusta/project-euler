
//using algorithm
//binomial theorem see more at https://www.cuemath.com/algebra/binomial-theorem/

let factorial = (num) => {
	num = BigInt(num);
	if ( num <= 1n )
		return 1n;
	return num * factorial(num - 1n);
}

let paths = (gridSize) => {
    let n = 2 * gridSize;//number of choices (right or down)
    let k = gridSize;//number of times you can make each choice

    return factorial(n) / (factorial(k) * factorial(n-k));
}

console.log(`Paths = ${paths(20)}`);