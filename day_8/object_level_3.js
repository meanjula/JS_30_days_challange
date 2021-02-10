let personAccount = {
    firstName :'Anjula',
    lastName :'Ghale',
    incomes :{
        online :1000,
        monthly :5000
    },
    expenses : {
        travel : 100,
        food : 500,
        accomodation : 700,

    },
    totalIncome : function(){
       let allIncome = 0;
       let values = Object.values(this.incomes)
       for(let i=0; i<values.length; i++){
           allIncome += values[i]
       }
       console.log(values)
       return allIncome
    },
    totalExpenses : function(){
        let allExpenses =0;
        let values = Object.values(this.expenses)
        for(let i=0; i<values.length; i++){
            allExpenses += values[i]
        }
        return allExpenses
    },
    accountInfo : function(){
        return `This account belongs to Mrs.${this.firstName} ${this.lastName}.`
    },                                                                                                                                          
    accountBalance : function(){
        let balance =this.totalIncome() - this.totalExpenses()
        return balance
    },
}
let addincome =personAccount.incomes.freelance = 50
console.log(personAccount)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountBalance())

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]
users.signUp = function (username, email, password){
    let id =''
    let date = new Date()
    let chars ="abcdefghiklmnopqrstuvwxyz"     
    for(i=0; i<6; i++){
            let idIndex = Math.floor(Math.random() * chars.length)
            id += chars[idIndex]
        }
        let newUser= {        
               _id: id,
                username: username,
                email: email,
                password: password,
                createdAt:`${date.getDay()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: 'false'
            }; 
        let add = true;
        add ?
        users.push(newUser):
        console.log(`User ${username} already exists`);
        users.forEach(user =>{
            if(user.username === username && user.email === email){
                return add = false;                   
            }
            else{return}
        })
        console.log(users)
        } 
    
  console.log(users.signUp('thomas', 'thomas@thomas.com', '123333'))

  

    
   
