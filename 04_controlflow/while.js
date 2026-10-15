// const arr = [ 1 ,2,3,4,5,6,7]

// while loop 

let i = 0;
while(i<=10){
    console.log(i);
    if(i==5){
        console.log(`the ${i} id good number`);
    }
    i++;
}

// do while loop

let j=1;
do {
    console.log(j)
    i++;
} while (i>=11);

// looping on the array

const arr =[2,4,5,6,3,7,9,8];
let k =0;

while(i<arr.length){
    if(arr[k]===4){
        console.log("This is the stoppage point");
        break;
    }
    console.log(arr[i]);
    i++;
}