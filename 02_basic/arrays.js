// arrays 

// const myarr = [ 1,2 , 43,433 , 2 , "bdksdb" , true   ] tis is velid declaration

// declaration of aarray
const myarr = [ 1, 3, 4 , 5 ,6 ]
const arr = ['saktiman','nagraj','balveer','hatim']

// and 2nd type of declaration

const arr1 = new Array(1,2,4,6,5,9,0)
console.log(arr1[3]);

// Array methods 

myarr.push(121)

myarr.push(11)

myarr.pop()

// myarr.length()

myarr.unshift(9999)

console.log(myarr)

myarr.shift()

// splish and slice 

const ar = new Array(2,4,5,7,8,1)

console.log("A", ar)

//slice
const ar1 = ar.slice(0,4)
console.log("B", ar1)
console.log('main', ar)

// splice
const ar2 = ar.splice(1,3)
console.log("C",ar2)
console.log('main',ar)
