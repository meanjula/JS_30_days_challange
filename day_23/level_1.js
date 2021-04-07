const body = document.querySelector('body') 
let para = document.querySelector('p')
let h1 =document.querySelector('h1')
let h2 =document.querySelector('h2')
let input = document.querySelector('input')
let button = document.querySelector('button')
let error = document.querySelector('#error')
let div = document.querySelector('div')

let box
function generateNum (num) {
    for(let i=0; i<=num; i++){
        box = document.createElement('span')
        box.innerHTML = i
        div.appendChild(box)
        box.style.border = 'solid'
        box.style.width = '70px'
        box.style.height = '50px'
        box.style.fontSize = '30px'
        box.style.textAlign = 'center'
        box.style.fontWeight = 'bold'
        box.style.paddingTop ='10px'
        function isPrime(number){ 
            if (number <= 1)
            return false;
         
            // The check for the number 2 and 3
            if (number <= 3)
            return true;
         
            if (number%2 == 0 || number%3 == 0)
            return false;
         
            for (let j=5; j*j<=number; j=j+6){
               if (number%j == 0 || number%(j+2) == 0)
               return false;
            }
        return true;
        } 
        if(isPrime(i) == true){
            box.style.background = '#d15a45' 
        }
        else if(i % 2 == 0){
            box.style.background = '#549467'
        }
        else{
            box.style.background = '#edda79'
        }   
   
    }     
    console.log(box)  
}

button.addEventListener('click', () =>{
    let value = input.value
    let numb = parseInt(value)
    if(value == ''){
        error.textContent ='Enter number value in input field to generate numbers'
        error.style.color = 'red'
    }
    else if(typeof numb !== 'number' || isNaN(numb)) {
        error.innerText = 'Enter number'
        error.style.color ='red'
    }
    else{
        generateNum(numb)
    }   
}) 


body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'
body.style.fontSize = '0.7em'
body.style.display = 'flex'
body.style.flexDirection ='column'
body.style.gap = '20px'


h1.style.fontWeight = 'bold'
h1.style.fontSize = '2.5em'
h1.style.margin='0'
h1.style.color = ' #008000'

h2.style.fontSize = '1.2em'
h2.style.fontWeight = 'thin'
h2.style.textDecoration ='underline'
h2.style.margin='0'

para.style.fontSize = '1.2em'
para.style.textDecoration ='underline'
para.style.margin='0'


div.style.width = '90%'
div.style.display = 'flex'
div.style.flexWrap = 'wrap'
div.style.justifyContent = 'center'
div.style.margin ='auto'
div.style.marginTop='20px'

input.style.width = '35%'
input.style.height ='40px'
input.style.alignSelf ='center' 
input.style.textAlign = 'center'
input.style.borderRadius ='5px'


button.style.background = '#008000'
button.style.width = '20%'
button.style.alignSelf ='center' 
button.style.textAlign = 'center'
button.style.color ='white'
