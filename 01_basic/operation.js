// These comperision are work as normal , b/c the same data type 

// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=2);
// console.log(2/1);
// console.log(2>=1)
// console.log(2<=1);

// These comperison are confusing 

// in this the typescript converted the string in to number so the opt is ""true ""
console.log("2">1) 
console.log("02"> 1)

 /* 
 in the 1s2 and 3rd case the comperison operator converted the
 null in to Number = 0  , b/c of  0 > 0 = false , and  0 >= 0 is true so 
 the third output is "" true ""
 */

console.log(null > 0)


console.log(null==0);


console.log(null >= 0);

// like null rule , 

// in the undefinde case always the output is false 

console.log(undefined == 0 );
console.log(undefined > 0)
console.log(undefined < 0);

// in ""=="" case convert the "2" in to number and equality check 
console.log("2"==2);
// in "===" convesion k baad ye bhi check karega ki datatype same h ki nahi
console.log("2"===2);










