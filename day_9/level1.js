//forEach(it modify main element)
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
countries.forEach(country =>{
    console.log(country.toUpperCase())
})
numbers.forEach(number =>{
    console.log(number)
})

//map(it create new element or array without changing original)
//to uppercase
names.map(name =>{
    console.log(name.toUpperCase())
})
console.log(names)
//countries length
let countryLength =countries.map(country =>{
    return country.length
})
console.log(countryLength)
//square number
let squreArray =numbers.map(number =>{
    return number * number  
})
console.log(squreArray)
//map product price
products.map(product =>{
    //console.log(`${product.product}:${product.price}`)
    return product.price
})

//filter out and create new array
let countryWithLand =countries.filter(country =>{
    return country.toLowerCase().includes('land')  
})
console.log(countryWithLand);

let countryWithSix = countries.filter(country=>{
    return country.length === 6
 })
 console.log(countryWithSix)

 let countryStartE = countries.filter(country =>{
     return country.startsWith('E')
 })
 console.log(countryStartE)

 let pricesWithValue = products.filter(product =>{
      product.price > 0    
 })
 console.log(pricesWithValue)
 //another method
 products.filter((product) => {
    if (typeof product.price === 'number') console.log(product);
  });

 let getStringList =(arr) =>{
     let arrWithString = arr.filter(item =>{
         return typeof item ==='string'
     })
     return( arrWithString)
 }

 console.log(getStringList([1, 3, 'str', 'c']))
   
 //reduce
 let sumAarray = numbers.reduce((acc, curr)=> {
    return acc + curr
 }, 0)
 console.log(sumAarray)

 let NordicCountries = () =>{
     countries.push('Estonia')
     return countries +' is a nordic country'
 }
 console.log(NordicCountries())

let nordicCountries2 = countries.reduce((pre, curr, num) => {
      return (num = 0 ? curr : pre + ', ' + curr);
    })
  console.log(nordicCountries2)

 //some checks if some element are similer in aspect while every check every element.return booleans
 let nameGreaterSeven = names.some(nam =>{
     return nam.length > 7

 })
 console.log(nameGreaterSeven)
let everyCountryLand = countries.every(country=>{
    return country.toLowerCase().includes('land')

}) 
console.log(everyCountryLand)

//find return first element which fulfill condition while findindex return index of first element fulfiling condition.
let firstCountryWithSix = countries.find(country=>{
    return country.length === 6
 })
 console.log(firstCountryWithSix)
let firstCountryWithSixPos = countries.findIndex(country=>{
    return country.length === 6
 })
 console.log(firstCountryWithSixPos)

let indexOfRussia = countries.findIndex(country=>{
    return country === 'Russia'
 })
 console.log(indexOfRussia)