let num = BigInt(Math.pow(2, 1000));
let ns = num.toString();
let sum = 0n;

for (let i = 0; i < ns.length; ++i){
    sum += BigInt(parseInt(ns[i]));
}

console.log(`Sum is ${sum}`);