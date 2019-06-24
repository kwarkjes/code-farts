let inf = Infinity;

console.log(inf - 10);
// output: Infinity


console.log(inf - inf);
// output: NaN


console.log(inf === inf );
// output: true


console.log(inf * inf === inf - 1);
// output: true


console.log(NaN === NaN);
// output: false


console.log(typeof(NaN));
// output: 'number'


let someUndefinedVar;
console.log(undefined === someUndefinedVar); // output: true
console.log(Number()); // output: 0
console.log(Number(undefined)); // output: NaN
console.log(Number(someUndefinedVar)); // output: NaN



// parse binary int, the second param is radix (between 2 & 36)
console.log(parseInt(1000, 2));
// output: 8