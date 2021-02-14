/*const fetch = require("node-fetch")

const url = 'https://restcountries.eu/rest/v2/all'
let mostSpokenLanguage =[];
const fetchData = async () => {
    try {
    const response = await fetch(url)
    const data = await response.json()
    countries = data
    /*countries.forEach(country => {
        console.log(`country:${country.name}, capital:${country.capital}, population:${country.population}`) 

    })
    let country_arr = {}
    countries.forEach(country => {
        country_arr[country.name] = country.languages.length
        //console.log(`country:${country.language}, count:${count}`)

    })
    // country_arr.sort(function(a, b){return a-b})
    // console.log(mostSpokenLanguage.slice(0,10))
    // console.log(typeof country_arr)
    function sortObjectEntries(obj){
        return  Object.entries(obj).sort((a,b)=>b[1]-a[1])
        }
    res = sortObjectEntries(country_arr).slice(0,10)
    final = {}
    for(i=0;i<res.length;i++){
    final[res[i][0]] = res[i][1]
    }
    console.log(final)
    }catch(err){
        console.log('err')
    }
}
console.log('===== async and await')   
fetchData() */
      
const countries= require('../countries_data')
//sort countries by name
/*let sortCountryName =countries
.sort((a,b) =>{
    if(a.name < b.name){
        return -1
    }
    if(a.name > b.name){
        return 1
    }
})
console.log(sortCountryName)

let sortCountrycapital =countries
.sort((a,b) =>{
    if(a.capital < b.capital){
        return -1
    }
    if(a.capital > b.capital){
        return 1
    }
})
console.log(sortCountrycapital)

let sortCountryByPopulation =countries
.sort((a,b) =>{
    if(a.population < b.population){
        return -1
    }
    if(a.population > b.population){
        return 1
    }
})
console.log(sortCountryByPopulation)


let countryPoplnArr1=[]
countries.forEach(country=>{
      return  countryPoplnArr1.push(country.name, country.population)
    
})
console.log(countryPoplnArr1)

let populatedCountries= countries
  .sort((a, b) => {
    if (a.population > b.population) return -1
    if (a.population < b.population) return 1
    return 0
  }).slice(0,10)
console.log(populatedCountries) 

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = {
    count: function(arr){
        return arr.length
    },
    sum:function(arr){
        return arr.reduce((acc,cur) => acc+cur, 0)
    },
    min:function(arr){
        let minNum
        return  minNum = Math.min(...arr)
        },
    max:function(arr){
        let maxNum
        return maxNum = Math.max(...arr)
    },
    range:function(arr){
        return this.max(arr)-this.min(arr)
    },
    mean:function(arr){
        return Math.round(this.sum(arr)/this.count(arr))
    },
    median:function(arr){
        let a =arr.sort((a,b)=>a-b)
        if(a.length % 2 === 0){
            return a[a.length/2]
        }
        else{
            return a[Math.floor(a.length/2)]

        }
    },
    describe:function(arr){
        return `
        count:${this.count(arr)}
        sum:${this.sum(arr)}
        min:${this.min(arr)}
        max:${this.max(arr)}
        range:${this.range(arr)}
        mean:${this.mean(arr)}
        median:${this.median(arr)}
        `
    }

    }
    console.log('Count:', statistics.count(ages));
    console.log('Sum: ', statistics.sum(ages)) 
    console.log('Min: ', statistics.min(ages))
    console.log('Max: ', statistics.max(ages))
    console.log('Range: ', statistics.range(ages))
    console.log('Mean: ', statistics.mean(ages))
    console.log('Median: ',statistics.median(ages))

    console.log(statistics.describe(ages))*/

let langArr =[];
countries.map(country =>{
langArr.push(country.languages)    
})
console.log(langArr)
const langSet = new Set(langArr)
console.log(langSet)

