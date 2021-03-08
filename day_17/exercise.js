//level 1
//Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Anjula')
localStorage.setItem('lastName', 'Timsina')
localStorage.setItem('age', 100)
localStorage.setItem('country', 'Nepal')
localStorage.setItem('city','Helsinki')
console.log(localStorage)


//Create a student object with first name, last name, age, skills, country, enrolled keys and values for the keys.
const student ={
    firstName :'Anjula',
    lastName : 'Timsina',
    age : 100,
    country : 'Nepal',
    city : 'Helsinki'

}
const studentJson = JSON.stringify(student, undefined, 2)
localStorage.setItem('studentUser', studentJson)
console.log(localStorage.getItem('studentUser'))


//level-3
const PersonalAccount ={
    firstName : 'anjula',
    lastName : 'Timsina',
    incomes : 3000,
    expenses : 2000,
    
    totalIncome (){
        return this.incomes
    },
    totalExpense (){
        return this.expenses
    },
    addIncome(inco){
        return this.incomes += inco
    },
    addExpense(expen){
        return this.expenses += expen
    },
    accountBalance(){
       return this.totalIncome()-this.totalExpense()

    },
    accountInfo(){
      return `This account belongs to Mrs ${this.firstName} ${this.lastName}`  
    }
}
PersonalAccount.addIncome(500)
PersonalAccount.addExpense(500) 
console.log(PersonalAccount.totalIncome())
console.log(PersonalAccount.totalExpense())
console.log(PersonalAccount.accountBalance())
console.log(PersonalAccount.accountInfo())

//storing PersonalAccount in local storage

const accountJson = JSON.stringify(PersonalAccount,undefined,2)// converting to json cause object to loose its method
localStorage.setItem('personalAccount', accountJson)
console.log(localStorage.getItem('personalAccount'))