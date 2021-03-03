
 class Statistics{
     constructor(arr){
         this.arr = arr
     }
     count(){
         let count  = this.arr.length
         return count
     }
     sum(){
        let sum = this.arr.reduce((acc,curr)=>
            acc + curr,0)
            return sum
     }
     min(){
         let min = Math.min(...this.arr)
         return min
     }
     max(){
        let max = Math.max(...this.arr)
        return max
     }
     range(){
         let range = this.max()-this.min()
         return range
     }
     mean(){
        let mean = Math.round(this.sum()/this.count())
        return mean
     }
     median(){
        let i =this.arr.sort((a,b)=>(a > b ? 1 : -1))
        if(i.length % 2 === 0){
            return i[i.length/2]
        }
        else{
            return i[Math.floor(i.length/2)]
        }
    }
     mode(){   
         let arrCount =[]
         let count={}
         let arrSet = new Set(this.arr)
         for(const a of arrSet){
            const filteredarr =this.arr.filter((ar) => ar===a)
            console.log(filteredarr)
            arrCount.push({mode:a, count:filteredarr.length})

         }
         arrCount.sort((a, b) => {
            if (a.count > b.count) return -1
            if (a.count < b.count) return 1
            return 0
          })
          return arrCount.slice(0, 1)    
     }


 }
 const Statistics1 = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
 console.log('Count:', Statistics1.count())
 console.log('Sum:', Statistics1.sum())
 console.log('Max:', Statistics1.max())
 console.log('Min:', Statistics1.min())
 console.log('Range:', Statistics1.range())
 console.log('Mean:', Statistics1.mean())
 console.log('Median:',Statistics1.median())
 console.log('Mode:', Statistics1.mode())
 

 class PersonAccount{
     constructor(
         firstname,
         lastname,
         incomes,
         expenses
        ){
            this.firstname = firstname
            this.lastname = lastname
            this.incomes = 0
            this.expenses = 0
        
     }
     get totalIncome(){
        return this.incomes
    }
     get totalExpense(){
        return this.expenses
    }
     set addIncome (incomes){
         this.incomes += incomes
     }
     set addExpense (expenses){
        this.expenses += expenses
     }
     get accountInfo(){
         const Info = `this account belongs to ${this.firstname} ${this.lastname}`
         return Info
     }
     get accountBalance(){
         return this.incomes-this.expenses
     }
 }
 const Person1 = new PersonAccount('anjula', 'Timsina')
 console.log(Person1.accountInfo)
Person1.addIncome = 2000
 Person1.addIncome = 1000
Person1.addExpense = 1000
Person1.addExpense = 1000

console.log(Person1.totalIncome)
console.log(Person1.totalExpense)
console.log(Person1.accountBalance)