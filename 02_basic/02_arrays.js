const marval_heros = ["spiderman", "ironman" , "Thor"]
const DC_heros = [2, true , "flesh" , "superman", "batman"]

marval_heros.push(DC_heros)
DC_heros.pop()
console.log(marval_heros)

console.log(marval_heros[3][2])

const all_heros = marval_heros.concat(DC_heros)
console.log(all_heros)

// but most people did not use they use 

// spread operator (..., all_heros)

const indian_hero = [ "saktiman", "nagraj" , "balveer", "zokomon"]
const real_hero = ["bhagat_singh", "ram prashad bismil" , "sukh dev", "udham singh"]
const all_new_heros = [...indian_hero,...real_hero]
console.log(all_new_heros)


//+++++++++++++++++++++   flat()   +++++++++++++++++++++++++

const one_for_all_array = [1,4,2,4,[2,45,6,0,[33,54,56,7,[23.9,7,33,56,true,"raj"],["raju",2,5,6]]]]
 // to merge all the multi level array into one simle array use flat()

 const one = one_for_all_array.flat(Infinity)
 console.log(one)

 //++++++++++++++++++++++  from()    ++++++++++++++++++++++++++++++++++

 console.log(Array.isArray("yashvir")) // checking question 
 console.log(Array.from("yashvir"))


 // array banwane se pehle batana [padega ki kis ka array banana h keys ka , values ka ?
 // nahi bana paya to  empty array dega return m 

 console.log(Array.from({name:"ÿashvir"})) // intresting

 let score = 100 
 let score1 = 200
 let score2 = 300

 console.log(Array.of(score,score1,score2));
 