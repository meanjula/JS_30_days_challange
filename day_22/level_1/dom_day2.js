
const body = document.querySelector('body') 
let para = document.querySelector('p')
let h1 =document.querySelector('h1')
let h2 =document.querySelector('h2')
let div = document.querySelector('div')


body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'
body.style.fontSize = '0.7em'

h1.style.fontWeight = 'bold'
h1.style.fontSize = '2.5em'
h1.style.margin='0'


h2.style.fontSize = '1.2em'
h2.style.fontWeight = 'thin'
h2.style.textDecoration ='underline'
h2.style.margin='0'

para.style.fontSize = '1.2em'
para.style.textDecoration ='underline'
para.style.margin='0'

div.style.width = '90%'
div.style.margin ='auto'
div.style.marginTop='20px'
div.style.display ='flex'
div.style.flexWrap = 'wrap'
div.style.justifyContent = 'center'



let box
for(let i =0; i<= 101; i++){   
  box =document.createElement('div')
  div.appendChild(box)
   box.innerHTML = i
   box.style.border = 'solid'
   box.style.width = '70px'
   box.style.height = '50px'
   box.style.justifyContent ='center'
   box.style.fontSize = '30px'
   box.style.color = 'white'
   box.style.fontWeight = 'bold'
   box.style.textAlign = 'center'
   box.style.paddingTop ='10px'
  
    function isPrime(number)
   { 
     if (number <= 1)
     return false;
  
     // The check for the number 2 and 3
     if (number <= 3)
     return true;
  
     if (number%2 == 0 || number%3 == 0)
     return false;
  
     for (var i=5; i*i<=number; i=i+6)
     {
        if (number%i == 0 || number%(i+2) == 0)
        return false;
     }
     return true;
    } 

  if(isPrime(i) === true){
    box.style.background = '#f55742'
   }
 else if(i % 2 === 0){
    box.style.background = '#009933'
 }
 else{
  box.style.background = '#f5d442'
}
}
console.log(box)