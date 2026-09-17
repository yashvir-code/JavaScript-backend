let marks = "07"
let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let converted_score = Number(score)

console.log(converted_score)
console.log(typeof converted_score)

let convert_into_bool = Boolean(score)

console.log(convert_into_bool)
console.log(typeof convert_into_bool)

let marks_in_string = String(marks)
console.log(marks)
console.log(typeof (marks))

/*
conversion in number ,   => 
    ""33" in Number => 33 
    "33abd" in Number but typeof output => NaN (not a number) but type is still is Number
    true => 1 , false => 0 , conversion in number same as Viseversa 
    Number , Boolean , String , Flote are the keyword for conversion

*/

/*
 if "" (empty string) => output false 
 or "yashvir" => output true

*/

let str1 = "raj" + " "
let str2 = "singh"

let str3 = str1 + str2
console.log(str3)

// operation contatination

console.log("1"+ 2) // string + int = string 
console.log(1+"2")  // int + string = int 
console.log("1"+ "2") // str + str = str
console.log(1+2+"3")   // int + int + str = int + str 
console.log("1"+2+3) // str + int + int = str + int 

/*
this is also about conversion , 1st value k type ki tarah se , rest value bhi usi type treat ki jati h 

*/

console.log(true)
console.log(+true)   // output = 1
console.log(+"")   // output = 0
