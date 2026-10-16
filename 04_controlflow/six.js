const Numbers = [1,2,3,4,,5,6,7,8,9,10];

// const values = coading.forEach((item)=>{
//     console.log(item)
//     return item;
// })

// console.log(values);


const newNum = Numbers.filter((num)=>num >= 5)

// or =========================
const newdata = Numbers.filter((num)=>{
    return num>3
})
console.log(newNum);

console.log(newdata);


const userdata = [
    {id:1,subject:"history",pages:89},
    {id:2,subject:"math",pages:45},
    {id:3,subject:"english",pages:35},
    {id:4,subject:"history",pages:99},
    {id:5,subject:"Science",pages:120}
];

const filtered_data = userdata.filter((data)=>(data.pages <50));



console.log(filtered_data);

//++++++++++++++++++ multiple mathods in same time +++++++++++++=

const numbers = [1,2,3,4,5];

const newNumbers = numbers.map((num)=>(num*4))
                          .map((num)=>(num+5))
                          .filter((num)=>(num>15));

console.log(newNumbers);


//+++++++++++++++++++ reduce() method ++++++++++++++++++

const Digits = [1,2,3,4,5];

const initial = 0;
const Sum = Digits.reduce((accumiletor,currentvalue)=> accumiletor + currentvalue, initial);

console.log(Sum);

const fruits = [
    "apple", "banana", "apple","grapes","apple","banana","papaya"
];

const fru = fruits.reduce((acc,curr)=>{
    acc[curr]=(acc[curr] || 0)+1;
    return acc;
},{});

console.log(fru);

const products = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

const total = products.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
}, 0);

console.log(total); 

const prices = [50, 100, 150, 200, 250];

const total1 = prices
    .map(price => price)
    .filter(price => price > 100)
    .reduce((acc, curr) => acc + curr, 0);

console.log(total1); // 600