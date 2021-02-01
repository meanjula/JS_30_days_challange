function userIdGenerateByUser(){
  let char ='0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  let noOfId = Number(prompt('Enter how many ids you want'))
  let noOfChar = Number(prompt('Enter how many chars you want'));
  let idGenerated =[]
  for(let i=0; i<noOfId; i++){
    idGenerated[i] =''
    for(let j=0; j<noOfChar; j++){
      idGenerated[i] += char[Math.floor(Math.random() * char.length)] 
    }
  console.log(idGenerated)
  idGenerated.forEach(function (id){
    console.log(id);
  })
  }
} 
userIdGenerateByUser()
arrayOfHexaColors = () => {
    let hexaDecimal = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 4; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += hexaDecimal[Math.floor(Math.random() * hexaDecimal.length)];
        }
    }

    console.log(hex);
}
arrayOfHexaColors();

//rgb colors 
function arrayOfRgbColors(){
let randomRgbId =[]
 for(t=0; t<3; t++){
     let randomrgb = Math.floor(Math.random() *257);
     randomRgbId.push(randomrgb);
 }
 console.log(`rgb(${randomRgbId})`);
}
arrayOfRgbColors();

//hexa to rgb
function RGBAToHexA(r,g,b,a) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    console.log("#" + r + g + b + a);
  }
  RGBAToHexA(212, 219, 155, 5)

  function hexToRgb(hex){
    let rgb = ''
    let r= parseInt(hex.slice(1, 3), 16)
    let g= parseInt(hex.slice(3, 5), 16)
    let b= parseInt(hex.slice(5, 7), 16)
    console.log(`${r}, ${g}, ${b}`)  
  }
  hexToRgb('#1502BE');

 

 
//generate any number of hex or rgb
function generateColors(color, num) {
  let hexaNum ='0123456789ABCDEF';
  if(color === 'hex'){
    let randomHex =[]; 
    for(j=0; j<num; j++){
      randomHex[j] = ['#']
      for(i=0; i<6; i++){
         let randomNum = Math.floor(Math.random() *16)
         randomHex[j] += (hexaNum[randomNum])
    }
  }
  console.log(randomHex)
 }
  else if(color === 'rgb'){
    let randomRgbId =[]
    for(k=0; k<num; k++){
      randomRgbId[k] =[]
      for(t=0; t<3; t++){
        let randomRgb = Math.floor(Math.random() *255);
        randomRgbId[k].push(randomRgb);
      }
    } 
console.log(randomRgbId)
  }
  return color
}
generateColors('hex', 3);
generateColors('rgb', 3);

//using while loop
function factorialize(num){
  let result = num
  if(num === 0 || num==1){
    return 1
  }
  while(num > 1){
    num--
    result = result * num// (if result = 5 then num-- = 4)
 
}
console.log(result)
}
factorialize(5)

//using for loop
function factorial(num){
  if(num === 0 || num==1){
    return 1
  }
  for(let i=num-1; i>=1; i--){
    num = num * i
  }
console.log(num)
}
factorial(5)

//check function empty or not
function isEmpty(par){
  if(par === undefined){
    console.log('empty function')
  }
  else{
    console.log('not empty')
  }
}
isEmpty()

//summing arguments
function sumOFAll(...arg){
  let sum = 0
  for(const element of arg){
    sum += element
  }
console.log(sum)

}
sumOFAll(1, 2, 3, 4);

//sum of array items
function sumOfArrayItems(arr){
  let sum = 0
  for(const element of arr){
    if(typeof element == 'number'){
      sum += element
      let average = sum / arr.length
    }
    else{
      console.log(`${element} is not a number`)
    }
  }
console.log(sum)
}
sumOfArrayItems([2, 4, 8, 'app'])

function average(arr){
  let average = 0;
  let sum= 0
  for(const element of arr){
    if(typeof element == 'number'){
       sum += element
       average = sum /arr.length 
    }
    else{
      console.log(`${element} is not a number`)
    }
  }
console.log(average)
}
average([2, 4, 8, 'app'])


let modifyArray = (arr) => {
 if(arr.length >= 6){
   for(let i = 0; i < arr.length; i++){
     if(i = 5){
       arr.splice(4, 1, 'LEMON')
     }
   }
 }
 else{
  console.log('item not found')
  }
  console.log(arr)
}
modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'])

//check valid variable
function check(arg){
  let myRe =/^[A-Za-z$_]/g
    if(arg.match(myRe)){
     console.log('Is Valid variable')
    }
    else{
      console.log('Is not valid variable')
    }

}
const variableName ='firstName';
check(variableName);


//random unique id
let randSeven =[]
let sevenRandNumber = ()=>{
  while (randSeven.length<7){
    let randNum = Math.floor(Math.random()*10)
    if(!randSeven.includes(randNum)){
      randSeven.push(randNum)
    }
    
  }
  console.log(randSeven)
  
}
sevenRandNumber()

//reverse country
let newCountry =[]
let reverseCountries = (country) =>{
 for(i=country.length-1; i>=0; i--){
   newCountry.push(country[i])
 }
 console.log(newCountry)
}
reverseCountries(['finland', 'sweden', 'norway', 'denmark'])