const body = document.querySelector('body') 
const div = document.querySelector('.wrapper')
const h1 = document.querySelector('h1')
const h2 =document.querySelector('h2')
const para = document.querySelector('p')
const ul = document.querySelector('ul')
const list = document.querySelectorAll('li')
/*let para = document.createElement('p')
h2.innerHTML = <p><\p>
div.appendChild(para)
*/
//styling of body section
body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'
body.style.fontSize = '0.7em'

h1.innerHTML = `Anjula Timsina challenges in <span id="curYear">2020</span>`//setting value of h1
let curYear =document.querySelector('#curYear')
const changeColor1 = () => {
    let randomColor2 ='#'
    let hexaDecimal = '0123456789abcdef';
    for(let s=0; s<6; s++){
        let randomHexa =Math.floor(Math.random()* 16);
        randomColor2 += hexaDecimal[randomHexa];
        curYear.style.color = randomColor2
    }
}
 setInterval(changeColor1, 1000)
 curYear.style.fontSize ='3em'
 h2.style.textDecoration ='underline'
//GETTING TIME
const now = new Date()
const year = now.getFullYear();
console.log(year);
const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
let month =months[now.getMonth()];
const day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let sec = now.getSeconds();
if(hours < 10){
    hours = '0' + hours
}
if(minutes < 10){
   minutes = '0' + minutes
}
let fullTime =`${month} ${day}, ${year} ${hours}:${minutes}:${sec}`
console.log(fullTime);
para.innerHTML= fullTime
para.style.margin = 'auto'
para.style.width = '150px'
para.style.height ='20px'
para.style.textAlign ='center'
//GETTING RANDOM COLOR
const changeColor = () => {
    let randomColor2 ='#'
    let hexaDecimal = '0123456789abcdef';
    for(s=0; s<6; s++){
        let randomHexa =Math.floor(Math.random()* 16);
        randomColor2 += hexaDecimal[randomHexa];
        para.style.background = randomColor2
    }
}
 setInterval(changeColor, 1000)
 ul.style.listStyleType ='none'
 ul.style.margin = 'auto'
 ul.style.textAlign ='left'
 ul.style.paddingTop = '1em'

 list.forEach((li, i) => {
         li.style.width = '80%'
         li.style.display = 'block'
         li.style.lineHeight ='2em'
         li.style.borderBottom = 'solid'
         li.style.borderColor = 'white'
         li.style.borderWidth = '1px'
         if (i === 0) {
            li.style.background = 'green'
          }
    
          else if (i===1) {
            li.style.background = 'yellow'
          }
          else{
            li.style.background = 'red'
          }

          /*ALTERNATIVE WAY
              if (li.textContent.toLowerCase().includes("done")) {
                 li.style.backgroundColor = "green"
              } else if (li.textContent.toLowerCase().includes("ongoing")) {
                 li.style.backgroundColor = "yellow"
              } else {
                 li.style.backgroundColor = "red"
              }*/

 })