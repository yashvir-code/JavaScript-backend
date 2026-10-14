// falsy values 
//  false , 0 , null , -0 , Bigint 0n , "" (empty string), undefined , NaN

// Truthy values
//   "0",'flase',[],{}, funcion (){} ---- this is empty function 
const id = [];
const user = 'y@gmail.com';
if(user && id){
    console.log("got user Email");
}
else{
    console.log("dont got the email");
}

// empty object ko arry m convert 
// Object.keys(object_name)

const empty_obj = {}
if (Object.keys(empty_obj).length === 0){
    console.log("Object is empty");
}

// if empty arry ko bhi detect or check karna h ki empty h ki nahi ?
const empty_arr = []
if(empty_arr.length === 0){
    console.log("arry is empty"); 
}
else{
    console.log("not empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
