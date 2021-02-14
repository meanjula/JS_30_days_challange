const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: 3 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 5 },
  ]
const productSum = products.map(product =>{
        return product.price
      }).filter(price =>{
          return price > 0
      }).reduce((accumulator, currentValue) =>{
        return accumulator + currentValue
      },0)
      
let sumOfPrice = arr =>{
      const sumPrice = products.reduce((acc, cur) =>{
          return acc + cur.price
      }, 0)
      return(sumPrice)
  }
console.log(sumOfPrice(products))

let countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
const categorizeCountries = countries =>{
    let filterCountry = countries.filter(country=>{
    return country.toLowerCase().includes('den') || country.includes('land')
    })
    return filterCountry
}
console.log(categorizeCountries(countries))

const countryStartWithF = countries =>{
    let countryWithF = countries.filter(country =>{
        return country.startsWith('F')
    })
    return countryWithF
}
console.log(countryStartWithF(countries))

/*const getFirstTenCountries = countries =>{
    let firstTenCountries =
        if(countries.length == 10){
            return country
        }
    })
    return firstTenCountries
}
console.log(getFirstTenCountries(countries))*/
const getFirstTenCountries = (countries) => {
    firstTen = countries.slice(0,10)
    return firstTen;
}
console.log(getFirstTenCountries(countries));

let countryArra =[]
const getLastTenCountries = (countries) => {
    countries.forEach(country => {
        countryArra.push(country) 
    })
    let ascCountry = countryArra.sort()
    let desCountry = ascCountry.reverse()
    let lasTenCountries = desCountry.slice(0,10)
    console.log(lasTenCountries)
    
}
getLastTenCountries(countries);