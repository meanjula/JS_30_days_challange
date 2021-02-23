
const countries = require('../countries_data')
//sort countries by name
for(const{name, capital, languages} of countries){
    console.log(name,capital, languages)
}

const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name,skills, scores] = student
let score =scores.slice(2,4)
let skillLength = skills.length
let getInfo = `${name} (${skillLength}) [${skills}] ${score}`
console.log(getInfo)

/*let [names, skills, [, , jsScore, reactScore]] = student;
console.log(names,skills.length, skills, jsScore, reactScore);*/


//convert the array to a structure object
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

//array of Object 
const convertArrayToObject = (array)=>{
    let arr = []
    for(const[name,skills,scores] of array){
        let a = {name:name, skills:skills, scores:scores}
        arr.push(a) 
}
return arr
}
console.log(convertArrayToObject(students))
//or converting to object of object
/*const convertArrayToObject = (array)=>{
    for(const[name,skills,scores] of array){
        let a = {name:name, skills:skills, scores:scores}
         console.log(Object.assign({}, a))
}
}
convertArrayToObject(students)*/
const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
//Copy the student object to newStudent without mutating the original object
let {name,age,skills} = student1
let copiedStudent = ({name, age, skills}) =>{
    let a = {name, age,...skills}
    Object.assign({}, a) 
    let {frontEnd,backEnd,dataBase,dataScience} = skills
    let b={ skill: 'BootStrap', level: 8 }
    frontEnd.push(b)
    let c= {skill: 'Express',level: 9}
    backEnd.push(c)
    let d= {skill: 'Express',level: 9}
    dataBase.push(d)
    dataScience.push('SQL')
    return a
    }
console.log(copiedStudent({name, age, skills}))
