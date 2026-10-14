const temp = 39;

if(temp <= 50){
    console.log(`the temprature ${temp} is safe for human`);
    
}
else{
    console.log("themprature is not safe");
    
}

// always use let and const for define anithing , ot { var }
const score = 200;
if(score >100){
    let power = "fly"
    console.log(`user power : ${power}`);
}
console.log(`user power : ${power}`);

// short hand notation 

const balance = 1000;
if(balance >500) console.log("tested")
// ak hi line m condition or scope likhana hi short hand notaion hota h 
// is  sigle line scope hota h 

//++++++++++++++ multiple conditions check
if (balance > 500){
    console.log("less then");
}
else if( balance <800){
    console.log("less then 800");  
}
else{
    console.log("equle to 1000 or grater then 1000");
}

const userlogedin = true;
const debitcard = true;
const loegedingoogle = true;
const logedinemail = true;
// && used for both or all conditions need to be true
if(userlogedin && debitcard ){
    console.log("user can buy the course");
}
if(logedinemail || loegedingoogle ){
    console.log("user logedin success");
}
