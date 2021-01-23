//six characters random id
let randomId ='';//hard
let characters ='123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
for(let o=0; o<6; o++){
    let randomChar = Math.floor(Math.random() *characters.length);
    randomId += characters.charAt(randomChar);//randomId += characters[randomChar]
}
console.log(randomId);

//any number of characters random id
let randomId_2 ='';
let r = Math.floor(Math.random() *characters.length)
 for(let p=0; p<r; p++){
     let randomNumb = Math.floor(Math.random() *characters.length)
     randomId_2 += characters[randomNumb];
 }
 console.log(randomId_2);

 //generates a random hexadecimal number.
 let randomHexaId ='';
 let hexaDecimal = '0123456789abcdef';
 for(s=0; s<6; s++){
     let randomHexa =Math.floor(Math.random()* 16);
     randomHexaId += hexaDecimal[randomHexa];
 }
 console.log(`#${randomHexaId}`);

//generates a random rgb color number.
 let randomRgbId =[]
 for(t=0; t<3; t++){
     let randomrgb = Math.floor(Math.random() *257);
     randomRgbId.push(randomrgb);
 }
 console.log(`rgb(${randomRgbId})`);

 //new array of countries with capital letters
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
 let newArray = [];
 for(const country of countries){
     newArray.push(country.toUpperCase())
 }
 console.log(newArray);

//countries length
 let countriesLength =[];
 for(const country of countries){
    countriesLength.push(country.length)
 }
 console.log(countriesLength);
//capital first letter
let capitalfirst =[]
 for(const country of countries){
 country[0].toUpperCase()
 capitalfirst.push(country)
 }

 console.log(capitalfirst);

//create the countries array of arrays
let arrayOfArray =[];
 for(const country of countries){
     let a = country;
     let b = country.slice(0, 3);
     let c = country.length;
     arrayOfArray.push([a, b, c]);
     }
 console.log(arrayOfArray);
//country with land 
let countryWithLand =[];
 for(const country of countries){
    if(country.includes('land')){
    countryWithLand.push(country)
    }
    }
 if(countryWithLand.length == 0){
     console.log('All these countries are without land')
 }   
else{
    console.log(countryWithLand)
};

//checking countries with sub string ia
let countryWithIa = [];
for(const country of countries){
    if(country.includes('ia')){
        countryWithIa.push(country)
    }
}
if (countryWithIa == 0){
    console.log('These are countries ends without ia')
}
else{console.log(countryWithIa)}

//country with biggest number of character
let longName ='';
let count = 0;

for(const country of countries){
    if(count < country.length){
        count = country.length;
        longName = country;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}
console.log(longName);

//country containing only 5 characters.
let fiveChar = [];
for(const country of countries){
    if(country.length == 5){
        fiveChar.push(country)
    }
}
console.log(fiveChar);

// longest word in the webTechs array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let longWord = '';
  let num = 0;
  for(const tech of webTechs){
      if(num < tech.length){
          num = tech.length;
          longWord = tech;
      }
  }
  console.log(longWord);
//create array of arrays
let arrayOfWebTech = []
let array_1 = '';
let array_2 = ''; 
for(const tech of webTechs){
    array_1 = tech                                                                                                                      
    array_2 = tech.length
    arrayOfWebTech.push([array_1, array_2])
}
console.log(arrayOfWebTech);

// Create the acronym MERN 
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronym = []
for(const mern of mernStack){
   acronym.push(mern.slice(0, 1))
   
};

console.log(acronym.join(''));

//Iterate through the array using for loop
 for(const tech of webTechs){
  console.log(tech)   
 };

 //reverse the order using loop without using a reverse method.
 let fruits = ['banana', 'orange', 'mango', 'lemon'];
 let reverseFruits =[]
 /*for(let p = fruits.length-1; p>=0; p--){
     reverseFruits.push(fruits[p])
 }
 console.log(reverseFruits)*/ 
 //other method   
for(const fruit of fruits){
    reverseFruits.unshift(fruit)
}
console.log(reverseFruits)
 
 


let frontEnd = ['HTML', 'CSS', 'JS', 'React'];
let backEnd =  ['Node', 'Express', 'MongoDB'];
let fullStack =[frontEnd, backEnd]
console.log(fullStack);