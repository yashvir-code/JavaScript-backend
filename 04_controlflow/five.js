const coading = [ "js", "rb", "py", "cpp","c++"]

coading.forEach(element => {
    console.log(element)
});

// 2nd method 

coading.forEach( function (value) {
    console.log(value);
} )


// func. jo bahar h use forEach loop m pass kar sakte  h 

function printme(item){
    console.log(item);
}

coading.forEach(printme);

coading.forEach( (item ,index,arr) => {
    console.log(item,index,arr);
    
})

// extra 

const mycoading = [
    {
        langName :"javascript",
        langFile:"js"
    },
    {
        langName :"python",
        langFile:"py"
    },
    {
        langName :"c++",
        langFile:"cpp"
    }
]

mycoading.forEach((item)=>{
    console.log(item.langName);
})