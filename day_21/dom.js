//get by tagname
const firstPara = document.getElementsByTagName("p")[0]
console.log(firstPara)

//selecting only one element
/*const firstP = document.querySelector('p')//gives first p element
console.log(firstP)
const first = document.getElementById('first')//do not use # infront id*/

//get each paragraph by id
const paraFirst = document.querySelector('#first')
const second = document.querySelector('#sec')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
console.log(paraFirst)
console.log(second)
console.log(third)
console.log(fourth)

//get all node list
const paraAll = document.querySelectorAll('p')
console.log(paraAll)
//get the text content of each paragraph
paraAll.forEach(para => {
    console.log(para.textContent)
})

//paraAll[3].textContent ='Fourth paragraph'
fourth.textContent = 'Fourth paragraph'
//set class attribute
paraFirst.setAttribute('class', 'par_1')
second.setAttribute('class', 'par_2')
third.setAttribute('class', 'par_3')
fourth.setAttribute('class', 'par_4')