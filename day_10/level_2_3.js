const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let A = new Set(a)
let B = new Set(b)
let C = new Set([...a, ...b])
console.log(C)

let intersec = a.filter(num => B.has(num))
let c = new Set(intersec)
console.log(c)

let difference = a.filter(num => !B.has(num))
let d = new Set(difference)
console.log(d)

//level 3
const countries = require('../countries_data')
/*let count = 0;
countries.forEach(country =>{
  lang = country.languages.length 
  count += lang
})
console.log(count)
*/
function mostSpokenLanguages(countries, num) {
//get languages array from countries data
let langArray = []
countries.forEach(country =>{
    langArray.push(...country.languages);//Use the spread operator to transform a set into an Array.
  })
//convert languages Array to set and from set filtered out similar type of languages
let langSet = new Set(langArray)

let count1=[]
for(const lang of langSet){
    const filteredLang = langArray.filter(lng => lng===lang)
    console.log(filteredLang)
    count1.push({ lang: lang, count: filteredLang.length })
}
//sort according to highest language count
let sortedLangArr = count1.sort((a,b) =>(a.count > b.count ? -1 : 1))
//create language as key and count as value in new object and push it to new Array
let objArr =[]
for(const {lang, count} of sortedLangArr){// destructuring
 let objs = {lang, count}
  objArr.push(objs)
}
//get ten  most spoken languages
let i = objArr.slice(0, num)
return i
}
console.log(mostSpokenLanguages(countries, 10));

