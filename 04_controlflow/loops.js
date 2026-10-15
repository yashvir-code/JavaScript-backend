// for of 

// ["","",""] string in array
// [{},{},{},{}] object in Aray 

const arr =[1,2,3,5,6]

for (const i of arr) {
    console.log(i)
}

const greetings = "Hello yashvir singh!";
for (const i of greetings) {
    console.log(`Each char is ${i}`);
    
}

// map 

const map = new Map()
map.set('IN','India')
map.set('USA','America')
map.set('Fr',"France")

console.log(map)

for (const [key,value] of map) {
    console.log(key,":", value);    
}

// const myobject = {

// }