const body = document.querySelector('body')
const div = document.querySelectorAll('div')
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button =document.querySelector('button')

const allClass = document.querySelectorAll('.common')

let bmi
button.addEventListener('click', ()=>{
    bmi = mass.value / height.value ** 2
    alert(`your bmi is ${bmi.toFixed(2)}`)
    console.log(bmi)
})

body.style.backgroundColor = ' #e6fff2'
body.style.margin = 'auto'
body.style.textAlign ='center'
body.style.fontSize = '1.8rem'
body.style.color = '#004d28'

allClass.forEach((item)=>{
    item.style.backgroundColor = '#99ffce'
    item.style.height = '30px'
    item.style.font = 'bold'
    item.style.textAlign = 'center'
    item.style.fontSize = '1rem'
    item.style.border = 'solid black'
})



