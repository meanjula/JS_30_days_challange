//level 1
function outerFunction(){
    let sum 
    let b = 30
    let a = 20
    function innerFunction(){
         sum = a+b
        return sum

    }
    return innerFunction
}
const sumFun = outerFunction()
console.log(sumFun())

//level-2
function outerFunction1(a,b){
    function plusFunction(){
        return a + b
    }
    function minusFunction(){
        return a - b
    }
    function multiplyFunction(){
        return a * b
    }
    
    return {
        plus: plusFunction(),
        minus: minusFunction(),
        multiply: multiplyFunction()
    }
}
const allFunction = outerFunction1(a=30, b=20)
console.log(allFunction.plus)
console.log(allFunction.minus)
console.log(allFunction.multiply)

//level-3
function personAccount(fname,lname,income,expense,inco,expen){
   
    function totalIncome (){
        return income
    }
     function totalExpense (){
        return expense
    }
    function addIncome(inco){
        return income += inco
    }
    function addExpense(expen){
        return expense += expen
    }
    function accountBalance(){
       return totalIncome()-totalExpense()
    }
    function accountInfo(){
        return `This account belongs to Mrs ${fname} ${lname}`  
      }
    return{
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        addIncome: addIncome(inco),
        addExpense: addExpense(expen),
        accountBalance: accountBalance(),
        accountInfo: accountInfo()
    }
}

let account = personAccount('Anjula', 'Timsina', 3000, 2000,expen = 500, inco = 500 )
console.log(account.addIncome)
console.log(account.totalIncome)
console.log(account.totalExpense)
console.log(account.accountInfo)
