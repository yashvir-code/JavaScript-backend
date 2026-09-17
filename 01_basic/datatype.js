// Primitive 

// 7 types :-   String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100 
const bill = 23.45

const isLogedIn = false;
const outside = null

let useremail ;
// or
let username = undefined

const Id = Symbol ('1234')
const otherId = Symbol ('1234')
console.log(ID === otherId)
const bigNumber = 13132314123
// or

const bigdigit = 132n


// Refrence 

// 3 or etc type  :- Array , Object , Functions 

const heros = [ "saktiman" , 'nagraj' , 'balveer']

let myobject = {
    name : 'raja',
    age : 22,
}

const myfunction  = function(){
    console.log("hello world")
}




// ===================================++++++++==========================================


// Stack  (Primitive) = copy of the data from memory allocated to the veriable 

// Heap  ( nonPrimitive) = refrence by refrence of the data direct from existin storage 

let myname = 'yashvrrdotcome'
let anothermyname = myname
anothermyname = 'veerdotcome'

console.log(anothermyname);
console.log(myname)



// for the object 

let userone = {
    email:"yash@gmail.com",
    age:12
}

let usertwo = userone;
usertwo.email(veer@gmail.com)


console.log(userone)
console.log(usertwo)