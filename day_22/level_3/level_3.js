
import {anjulaChallenges2020} from './data.js'

const body = document.querySelector('body') 
const div = document.querySelector('div')

body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'
body.style.fontSize = '0.9em'
div.display ='flex'

let h1 = document.createElement('h1')
h1.innerHTML = anjulaChallenges2020.description
h1.style.fontWeight = 'bold'
h1.style.fontSize = '2.5em'
div.appendChild(h1)
let span = document.createElement('span')
span.innerText = '2020'
const changeColor1 = () => {
    let randomColor2 ='#'
    let hexaDecimal = '0123456789abcdef';
    for(let s=0; s<6; s++){
        let randomHexa =Math.floor(Math.random()* 16);
        randomColor2 += hexaDecimal[randomHexa];
        span.style.color = randomColor2
    }
}
setInterval(changeColor1, 1000)
span.style.fontSize ='3em'
h1.appendChild(span)

let h2 = document.createElement('h2')
h2.innerHTML = anjulaChallenges2020.challengeSubtitle
div.appendChild(h2)
let hTwoStyle ={
    fontSize : '1.3em',
    fontWeight : 'thin',
    textDecoration :'underline',
    margin :'auto',
    paddingBottom : '10px'
}
Object.assign(h2.style, hTwoStyle)

let span2 = document.createElement('span')
let setTime = ()=>{
    const now = new Date()
    const year = now.getFullYear();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month =months[now.getMonth()];
    console.log(month)
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
return fullTime
}
span2.innerHTML = setTime()
div.appendChild(span2)
const changeColor2 = () => {
    let randomColor2 ='#'
    let hexaDecimal = '0123456789abcdef';
    for(let s=0; s<6; s++){
        let randomHexa =Math.floor(Math.random()* 16);
        randomColor2 += hexaDecimal[randomHexa];
        span2.style.backgroundColor = randomColor2
    }
}
setInterval(changeColor2, 1000)
let span2Style = {
    fontSize : '1em',
    marginTop : '50px',
    textAlign :'center',
    border : '1px solid',
}
Object.assign(span2.style, span2Style)

let listGroup = document.createElement('ul')
for(const item of anjulaChallenges2020.challenges){
    let row = document.createElement('div')
    
    let challName = document.createElement('p')
    challName.innerHTML =item.name
    challName.className = 'box'

    let unList =document.createElement('select')
    item.topics.forEach(i=>{
        let topicList = document.createElement('option')
        topicList.innerHTML = i
        unList.appendChild(topicList)
    
    })
 
    let status = document.createElement('p')
    status.innerHTML = item.status
    
    row.style.display = 'flex'
    row.style.flexDirection ='row'
    row.style.maxWidth = '90%'
    row.style.border = '1px solid'
    row.style.margin ='5px'
    row.style.alignItems ='center'
    row.style.justifyContent ='space-between'
    row.style.listStyleType = 'none'

    challName.style.margin = '20px'
    unList.style.textAlign = 'center'
    unList.style.textDecoration = 'none'
    status.style.marginRight = '20px'

    if(item.status.includes('Done')){
     row.style.backgroundColor = 'green'
    }
    if(item.status.includes('Ongoing')){
        row.style.backgroundColor = 'yellow'
       }
    if(item.status.includes('Coming')){
        row.style.backgroundColor = 'red'
       }   

    listGroup.appendChild(row)
    row.appendChild(challName)
    row.appendChild(unList)
    row.appendChild(status)   
}
div.appendChild(listGroup)


/*let pOne = document.createElement('p')
pOne.innerHTML = anjulaChallenges2020.
div.appendChild(pOne)*/

