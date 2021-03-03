class Animal{
    constructor (
        name,
        age,
        color,
        legs
        ){
            this.name = name
            this.age = age
            this.color = color
            this.legs = legs
        }

        getFullInfo (){
            const fullInfo = `This is ${this.name}, ${this.age} years old ${this.color} dog with ${this.legs} legs.`
            return fullInfo
        }  
}

const Animal1 = new Animal ('Shere', 4, 'white', 4)
const Animal2 = new Animal ('kalu', 2, 'black', 4)
console.log(Animal1.getFullInfo())
console.log(Animal2.getFullInfo())

class Dog extends Animal{
    dogSays(){
        console.log('Woof Woof')
    }
}

class Cat extends Animal{
    catSays(){
        console.log('Mew Mew')
    }  
}
const Dog1 = new Dog('bingo', 2, 'grey', 4)
console.log(Dog1)
console.log(Dog1.dogSays())

const Cat1 = new Cat('bianca', 2, 'grey', 4)
console.log(Cat1)
console.log(Cat1.catSays())
console.log(Cat1.getFullInfo())

//level 2
class Dog2 extends Animal{
    constructor (
        name,
        age,
        color,
        legs,
        gender
        ){
            super(name, age, color, legs)
            this.gender = gender
        }
        getFullInfo (){
            let pronoun = this.gender == 'Male' ? 'He' : 'She'
            const fullInfo = `This is ${this.name}, ${this.age} years old ${this.color} dog with ${this.legs} legs.${pronoun} is a ${this.gender} dog`
            return fullInfo
        }  
        dogSays(){
            console.log('Woof Woof')
        
        }
        
}
const Dog3 = new Dog2('bingo', 2, 'grey', 4, 'Male')
console.log(Dog3)
console.log(Dog3.dogSays())
console.log(Dog3.getFullInfo())

