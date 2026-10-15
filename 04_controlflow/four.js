const myobject = {
    js:"javascript",
    cpp:"C++",
    rv:"ruby",
    swift:"Swift by apple"
}

for (const key in myobject) {
   console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming =[ "js", "python","rb","C++","java","c"]

for (const key in programming) {
    console.log(`these are all Programming lang. ${programming[key]}`);
}
// ye map iteratable nahi h is tarike se neeche wala 

// const map = new Map()
// map.set('IN','India')
// map.set('USA','America')
// map.set('Fr',"France")

// for (const key in map) {
//     console.log(`this is the ${map[key]} short form of ${map[value]}`);
       
// }