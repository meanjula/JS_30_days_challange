
import {countries} from './countries_data.js'
const mostSpokenLanguages = ()=> {
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
  let i = objArr.slice(0, 10)
  return i
}
let chartdata =[];
const tenMostLang =(mostSpokenLanguages())
tenMostLang.forEach(language =>{
  return chartdata.push(language.count)
})
let xLabels =[]
tenMostLang.forEach(language =>{
  return xLabels.push(language.lang)
})

const populatedCountries= countries
  .sort((a, b) => {
    if (a.population > b.population) return -1
    if (a.population < b.population) return 1
    return 0
  }).slice(0,10)

let popData =[]
populatedCountries.forEach(country=>{
  return  popData.push(country.population)  
})

//chart function
const canvas = document.getElementById('myChart')
const myChart = canvas.getContext('2d')

const pFunction = ()=>{
  let populationChart = new Chart(myChart, {
    type:'horizontalBar', //bar,horizontalBar,pie,line,doughnut,radar,polararea
    data:{
      labels:['China', 'India', 'USA', 'Indonesia', 'Brazil', 'Pakistan', 'Nigeria','Bangladesh', 'Russia', 'Japan'],
      datasets:[{
        label:'10 Most populated Countries in the world',
        data:popData,
        backgroundColor :'rgba(224, 203, 24, 1)',
        
      }]
    },
    options:{
      events:['click']

    }
  })
}
canvas.innerHTML =pFunction()

const lFunction = () =>{
  let languagesChart = new Chart(myChart, {
    type:'horizontalBar', //bar,horizontalBar,pie,line,doughnut,radar,polararea
    data:{
      labels: xLabels,
      datasets:[{
        label:'10 Most Spoken Languages in the world',
        data:chartdata,
        backgroundColor :'rgba(224, 203, 24, 1)',
      }]
    },
    options: {
      events:['click']
    }
  })
}



const pButton = document.querySelector('.population')
const lButton = document.querySelector('.languages')

pButton.addEventListener('click', () =>{
  pFunction()
})
lButton.addEventListener('click', () =>{
  lFunction()
})