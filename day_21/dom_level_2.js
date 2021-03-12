//change style using js
const paras = document.querySelectorAll('p')
paras.forEach((par, i) =>{
console.log(par.style.color = 'blue')
console.log(par.style.background = '#e9ebf0')
console.log(par.style.fontFamily= 'sans-serif')
console.log(par.style.fontSize = '1.2em')

})
//make 2 color paragraph
paras.forEach((par, i) => {
    if(i % 2 == 0){
        console.log(par.style.color = 'red')
    }
    else{
        console.log(par.style.color = 'green')
    }
})