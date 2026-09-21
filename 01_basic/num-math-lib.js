// js can auto detect the datatype of given value or we can define it manualy
const num = 2007 
console.log(typeof num);
console.log(num);


const num1 = new Number(2002)
console.log(num1)

console.log(num1.toString().length)

const balance = new Number(28)
console.log(balance.toFixed(3))

const amt = 123.345
console.log(amt.toPrecision(5))

// the defaut standards is uk bases , for indian standered 'en-IN' 

const networth = 1000000000
console.log(networth.toLocaleString('en-IN'))

// *******************************  MATH Library  *********************************

/* Math library js k sath default aati h 
inspect m console par jakar console.log(Math) run karne par 
all methods and predefined values or functions show ho jate h prototype m */

console.log(Math);
console.log(Math.PI)
console.log(Math.SQRT1_2)
console.log(Math.SQRT2)
console.log(Math.E)
console.log(Math.LN10)
console.log(Math.LN2)
console.log(Math.LOG2E)


console.log(Math.abs(-4586))
// it converts the -ve valur into +ve 

console.log(Math.cbrt(8))
console.log(Math.floor(4.78))
console.log(Math.ceil(4.25))
console.log(Math.sin(180))
console.log(Math.LOG2E)