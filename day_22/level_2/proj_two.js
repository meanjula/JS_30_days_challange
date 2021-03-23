const body = document.querySelector('body') 

let h1 =document.querySelector('h1')
let h2 =document.querySelector('h2')



body.style.textAlign = 'center'
body.style.fontFamily = 'helvetica'
body.style.fontSize = '1em'

h1.style.fontWeight = 'bold'
h1.style.fontSize = '2.5em'

let div = document.createElement('div')
let countryBox
import { countries } from './countries_data.js';
for(const country of countries){
    countryBox = document.createElement('span')
    countryBox.innerHTML = country.name
    div.appendChild(countryBox)
    countryBox.style.border ='1px solid'
    countryBox.style.width = '200px'
    countryBox.style.height = '110px'
    countryBox.style.justifyContent ='center'
    countryBox.style.fontSize = '1.2em'
    countryBox.style.margin = '5px'
    countryBox.style.fontWeight ='bold'
    countryBox.style.paddingTop = '50px'
    countryBox.style.backgroundColor =' #ffffe6'
   
}
document.body.appendChild(div)
div.style.display ='flex'
div.style.flexWrap = 'wrap'
div.style.justifyContent = 'center'
div.style.width = '90%'
div.style.margin ='auto'
div.style.marginTop='60px'
div.style.textAlign = 'center'

