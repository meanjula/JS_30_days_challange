//level-1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const txt1 = JSON.stringify(skills,undefined,2)
console.log(txt1)

let age = 250;
const ageJson = JSON.stringify(age, undefined, 2)
console.log(ageJson)

let isMarried = true
const isMarriedJson = JSON.stringify(isMarried, undefined, 2)
console.log(isMarriedJson)


const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const studentJson = JSON.stringify(student, undefined, 2)
console.log(studentJson)

//level-2
const student1Json = JSON.stringify(student,['firstName', 'lastName', 'skills'], 4)
console.log(student1Json)

//level-3
const txt =`{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`
/*const txtObj1 = JSON.parse(txt,undefined,2)
console.log(txtObj1)*/

const userObj = JSON.parse(txt)
let max = 0;
let mostSkillfull;
let person;
for(const user in userObj){
        if(userObj[user].skills.length > max){
            max = userObj[user].skills.length
            mostSkillfull = userObj[user]
            person = user
        }
}
console.log('User with most skill ', person, mostSkillfull);