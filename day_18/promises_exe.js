const fetch = require("node-fetch")
const url = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
//promise method
fetch(url)
.then(response => response.json())
.then(countries => {
    console.log(countries.length)
    countries.forEach(country =>{
        console.log(`area : ${country.area}`)

    })

})
.catch(error => console.log(error))

//async and await method
let countries;
let worldLanguage = 0;
let largestCountry
let tenLargeCountry = [] ;
const fetchCountries = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        countries = data
        countries.forEach(country =>{
            console.log(`country: ${country.name} capital: ${country.capital} languages: ${country.languages} population: ${country.population}`)
            
        })
       //total language in world
        countries.forEach(country =>{
                let countryTotalLanguage = country.languages.length
                worldLanguage += countryTotalLanguage
            })
        console.log(worldLanguage)

        // largest countries in the world
        let maxArea = 0
        countries.forEach(country =>{
            if(maxArea < country.area ){
                maxArea = country.area
                largestCountry = country;}
        })
        console.log(largestCountry)

    }catch(err){
        console.log(err)
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
}
console.log('===== async and await')
fetchCountries()

let averageWeight =[] ;
let catNames =[];
const fetchCat = async () =>{
    try{
        const response = await fetch(catsAPI)
        const data = await response.json()
        cats = data
        cats.forEach(cat =>{
        catNames.push(cat.name)
        })
        console.log(catNames)//print out all cats name
        
        cats.forEach(cat =>{
            console.log(`${cat.name} = ${cat.weight.metric} metrics`)
        })
    
    }catch(err){
        console.log(err)
    }
}
console.log('===== async and await')
fetchCat()

let mostSpokenLanguage =[];
const fetchData = async () => {
    try {
    const response = await fetch(url)
    const data = await response.json()
    countries = data
    countries.forEach(country => {
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
fetchData() 


const mySkillPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      let skills = ['HTML', 'CSS', 'JS']
      if(skills.length >= 3){
          resolve(skills)
      }else{
              reject('not skillful')
          }
    }, 2000)
  })  
  //error parameter set to false so return result
    mySkillPromise.then(resolveMess =>{
        console.log(resolveMess)
    })
    .catch(rejectMess=>{
        console.log(rejectMess)
    })

   //if not sick promise to bake cake, otherwise no cake but have party
  const myBirthday = new Promise ((resolve, reject) =>{
     setTimeout (() =>{
        let notSick = false
        if(notSick){
            resolve ('2 cakes')
        }else{
            reject('I am sad')
        }
     }, 3000)
  })

  myBirthday.then((resolveMessage) =>{
      console.log(`I will have ${resolveMessage}`)
  })
  .catch((rejectMessage) =>{
      console.log(rejectMessage)
  })
  .finally(()=>{
      console.log('party')
  })
  
  console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
  console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
  ) 
  const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.` }
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        movies.push(movie);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

createMovies({ title: `Return of the Jedi`, body:`Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`})
.then(getMovies);
  