const name = "rajveer"
const repocount = 50

console.log(name+repocount+"value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const str = new String("yashvir singh parihar")

// new se object  use karte h javascript k , means as a object work karega 

console.log(typeof str)
console.log(str [3]) // by the type we can access the string by index value vise versa

console.log(str.__proto__) // by this we see the all function and methods (inbuild) of for string 

console.log(str.toUpperCase())
console.log(str.charAt(9))
console.log(str.indexOf("r"))


console.log(str.substring(0,8))

// we can use only positive number 
const str2 = str.substring(8,14)
console.log(str2)

// but in slice we can give +ve and -ve number in the () 
const str3 = str.slice(-1,8)
console.log(str3)

// for remove the blank extra space from word and string 

const st = new String("    wdfefwewj   wije ndw  ")
console.log(st.trim())
console.log(st.trimEnd())
console.log(st.trimStart())

const url = "https://yhvir.com/yashvirsing%007parihar"

console.log(url.replace('%007' , '-'))
console.log(url.includes('parihar'))
console.log(url.split('-'))



