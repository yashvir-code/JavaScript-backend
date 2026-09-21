const mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString()) // only date will apear in terminal 
console.log(mydate.toISOString());  // 
console.log(mydate.toLocaleDateString());  // only date in mm/dd/yyyy formate
console.log(mydate.toLocaleString());   // both date and time in mm/dd/yyyy and hh:mm:ss am/pm  formate
console.log(mydate.toJSON());   // in the standard time formate both   yyyy-mm-dd time in hh:mm:ss.mile sec  like 19:43:55.745Z

console.log(typeof mydate)   // object


// ++++++++++++++++++++++++++  DECLARATION OF DATE IN DIFFRENT WAY +++++++++++++++++++++++++++++

// months  start with 0 in js

let mynewdate = new Date(2026 ,1, 13)
console.log(mynewdate.toDateString());

let dt = new Date(2020,0,7 , 19 , 13 , 20)
console.log(dt.toLocaleString());

/*
in indian standard we follow the mm-dd-yyyy 
in the dellaration month start with 1 or 01
*/
let dt1 = new Date("09-13-2002")
console.log(dt1.toString());

// timestamp returns the miliseconds for the second m convert k liye
// ise 1000 se divede kari but sum times it returns decimal values
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(dt.getTime());

// by the output of both timestamp after comperison we deside 

// how we converts it timestamp in to seconds 
console.log(Math.floor(Date.now()/1000));

// current time or day ki day get karna h ya other months , etc by these fllowing

console.log(dt.getDay());

