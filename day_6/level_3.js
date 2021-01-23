const countries = [
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
  ]
  let countryCopies = countries.slice()
  //sort the copied array
  let sortedCountries = countryCopies.sort();//arrange array in ascending order
  console.log(sortedCountries);

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let webTechsCopy = webTechs.slice();
let sortedWebTechs = webTechsCopy.sort();
console.log(sortedWebTechs);

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let mernStackCopy = mernStack.slice();
let sortedMernStack = mernStackCopy.sort();
console.log(sortedMernStack)

//Extract all the countries contain the word 'land' 
let countryWithLand = [];
for(let i=0; i<countries.length; i++){
   if(countries[i].includes('land')){
     countryWithLand.push(countries[i])
   }
};
console.log(countryWithLand);

//Find the country containing the hightest number of characters
let longName =[];
let count = 0
for(let i=0; i<countries.length; i++){
    if(count < countries[i].length){
        count = countries[i].length
        longName = countries[i]
    }
}
console.log(longName);

//Extract all the countries containing only four characters
let countryWithFour = [];
for(let i=0; i<countries.length; i++){
   if(countries[i].length == 4){
     countryWithFour.push(countries[i])
   }
}
if(countryWithFour.length == 0){
    console.log('No such country')
}
//Reverse the countries array and capitalize each country
let reverseCountry =[];
for(let i=countries.length-1; i>=0; i--){
    countries[i].toUpperCase()
    reverseCountry.push(countries[i])
}
console.log(reverseCountry);

