const dog = {
    name : 'Romio',
    age : 5,
    leg : '4',
    color : 'brown',
    bark : 'woof woof',
}
dog.breed = 'bulldog'
dog.getDogInfo = function(){
    return `${this.name} is ${this.age} years old ${this.color} dog.`
}
console.log(dog)
console.log(dog.getDogInfo());
const values = Object.values(dog)
console.log(values)

//level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
let max = 0;
let highlySkilled ;
for(const user in users){
    if(users[user].skills.length > max){
        max = users[user].skills.length
        highlySkilled = user
    }

}
console.log(highlySkilled)
//count logged in user
let count = [];
for(const user in users){
    if(users[user].points >= 50){
        count.push(user)
    }
}
console.log(count)


//setting name without modifying original object
let user = {Anjula:{email: 'anjula.ghale@.com', skills: ['HTML', 'CSS', 'JavaScript'], age:90 }}
let copyuser= Object.assign({}, users, user)
console.log(copyuser)


//get keys of users
let usersKeys = Object.keys(copyuser)
console.log(usersKeys)

//get values of users
let usersValue = Object.values(copyuser)
console.log(usersValue)

let mernDeveloper =[]
  for(const user in users){
    if(users[user].skills.indexOf('MongoDB', 'Express','React', 'Node') != -1){
       mernDeveloper.push(user)
    }
  }
  console.log(mernDeveloper);

const country ={
    countryName : 'Finland',
    capital : 'Helsinki',
    population : 50000000,
    language : 'Finnish',
    countryInfo : function(){
        return`${this.countryName}'s capital is ${this.capital}, it's population is ${this.population} and language is ${this.language}.`
    }

}
console.log(country.countryInfo())

