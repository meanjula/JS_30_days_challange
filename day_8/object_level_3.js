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
let addincome =Object.assign(personAccount.incomes,{freelance:50})
let addExpenses = Object.assign(personAccount.expenses,{sports:50})
console.log(personAccount.expenses)
console.log(personAccount.incomes)
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
signUp = function (username, email, password){
    let add = true;
    users.forEach(user =>{
        if(user.username === username && user.email === email){
            return add = false;                   
        }
        else{
            return add=true
        }
    })
    if(add == true){
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
            users.push(newUser)
    }
    
    else{
        console.log(`User ${username} already exists`);
    }
}
    // console.log(users) 
    
signUp('Thomas', 'thomas@thomas.com', '123333')

  signIn =function(email,password){
      let logged_in = false
      for(const user of users){
          if(user.email === email && user.password === password){
              logged_in = true
              console.log(`${user.username} signin`)
              break;
          }
      }
      if(logged_in === false){
          console.log('wrong email or password')
      }

  }
  signIn('brook@brook.com',  '123111')
  signIn('anjula@ghale.com', '123456')

    
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
 products.forEach(product => {
        let ratingVal = product.ratings.forEach(i =>{
            console.log(`rating ${i.rate}`)
        })
        console.log(`${product.name}`)
    })

rateProduct = function (productId, userId){
    let idIndex = products.findIndex(product=>{
        product._id === productId
    })
    console.log(idIndex)
    let newRating = {userId:userId, rate:Math.floor(Math.random() * 5)}
    console.log(newRating)
    if(idIndex === -1){
       console.log('product not found')}
    else{ 
       console.log(`${products[idIndex].ratings.push(newRating)}`)}
    
}
rateProduct('hedfcg','fg12cy')


averageRating = function(){
    products.forEach((product) => {
        let sum = 0
        let average = 0
       product.ratings.forEach((ratin)=>{
        sum += ratin.rate
        average = sum/2
       })
       console.log(`Average rating for '${product._id}' is ${average}`)
    })
}
averageRating();

likeProduct =function(userId, productId){
    products.forEach(product => {
    let likes = product.likes
    if(product._id === productId){
        userInd = likes.indexOf(userId)
    if(likes.includes(userId)){
        let updatedLikes =likes.splice(userInd,1)
        console.log(updatedLikes)
    }
    else{
        likes.push(userId)
        console.log(likes)
    }
    }
})
}
likeProduct('struuu','hedfcg')   
