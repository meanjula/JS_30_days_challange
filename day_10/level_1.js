
const countries = ['Finland', 'Sweden', 'Norway']
const emptySet = new Set()//create empty set
console.log(emptySet)

let numberTen
for(i=0; i<=10; i++){
  numberTen = emptySet.add(i)
}
console.log(numberTen)
console.log(numberTen.delete(6))//delete an element
console.log(numberTen.size)
numberTen.clear()//clearing set

//set of countries
const setOfCountries = new Set(countries)
console.log(setOfCountries)
const map = new Map()
console.log(map)

const countries2 = ['Finland', 'Sweden', 'Norway'];

const countri = new Map();//map(0){}
for (let i = 0; i < countries2.length; i++) {
  countri.set(countries2[i],countries2[i].length)
}//map.set(key, value) stores value by key
console.log(countri);
//2nd method
let CountryObj =(arr)=>{
  let map = new Map()
  for(let countri of arr){
    length = countri.length
    map.set(countri, length)//adding values to map
  }
  return map
} 
console.log(CountryObj(countries))


//extra excercise from outside
//create map from plain object
let obj = {
  name: "John",
  age: 30
};
let map2 = new Map(Object.entries(obj));
console.log( map2); // John
//Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ].

//Array.from() returns array from map set or array like obj
 let arr=["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
 function unique(arr){
     let map = new Map()
     for(let word of arr){
        let sortword = word.toLowerCase().split('').sort().join('') 
        map.set(sortword, word)
     }
     return Array.from(map.values())
 }
 console.log(unique(arr))
