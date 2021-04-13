let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')
let select = document.querySelector('select')
let button = document.querySelector('button')
let container = document.querySelector('.container')
let imgContainer = document.querySelector('.img-container')

const space = {
    mercury:{
        gravity:0.38,
        image:"images/mercury.png"
    },
    venus:{
        gravity:0.91,
        image:"images/venus.png"
    },
    earth:{
        gravity:1.0,
        image:"images/earth.png"
    },
    mars:{
        gravity:0.38,
        image:"images/mars.png"
    },
    jupiter:{
        gravity:2.34,
        image:"images/jupiter.png"
    },
    saturn:{
        gravity:0.93,
        image:"images/saturn.png"
    },
    uranus:{
        gravity:0.92,
        image:"images/uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"images/neptune.png"
    }
}

for(const element in space){
    let option = document.createElement('option')
    option.innerHTML = element
    select.appendChild(option)
   
}
console.log(select)
let elseText = function(){  
    let mass = input.value
    let gravi = space[select.value].gravity
    let weight = mass * gravi
    let txtContainer = document.createElement('div')
    txtContainer.innerHTML = `The weight of object in <span Id = "span1">${select.value}</span> is`
    let p = document .createElement('p')
    p.innerHTML = `${weight.toFixed(2)}N`
    txtContainer.appendChild(p)
    txtContainer.className ='text'
    container.appendChild(txtContainer)


}
let text = function (){
    container.innerHTML ='' //to delete previous element 
    let textContainer =document.createElement('div')
    textContainer.innerHTML = 'Incorrect input enter mass as a number'
    container.appendChild(textContainer)
    textContainer.innerHTML =''

    container.style.minHeight = '20%'
    textContainer.style.paddingTop ='10px'
    textContainer.style.color = '#cc9900'
    textContainer.style.fontSize = '1.5rem'
  
 
  
}

let planetImage = function (){
    let imgSrc = space[select.value].image
    let imgContainer =document.createElement('img')
    imgContainer.src = imgSrc 
    imgContainer.className = "planet-img"
    container.appendChild(imgContainer)
    container.style.display = 'flex'
    container.style.flexDirection ='row'   
}

button.addEventListener('click', () =>{
    container.innerHTML =''
    let value = input.value
    let numb = Number(value)
    if(typeof numb !== 'number' || isNaN(numb)) {
        text()
    }
    else{
        planetImage()
        elseText()
        
    }
   
})

