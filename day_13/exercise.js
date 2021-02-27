const countries = ['Finland', 'Sweden', 'Denmark', 'Russia']

console.table(countries)

const countriesObj = [
    {
        name :'Finland',
        capital : 'Helsinki',
        language : 'Finnish',

    },
    {
        name :'sweden',
        capital : 'Stockholm',
        language : 'Swedish',
        
    },
    {
        name :'Norway',
        capital : 'Oslo',
        language : 'Norwegian',
        
    },
    {
        name :'Nepal',
        capital : 'Kathmandu',
        language : 'Nepali',
        
    }
]
console.table(countriesObj);

console.group('countries')
console.log(countries)
console.groupEnd()

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
console.group('Users')
console.log(user)  
console.log(users)
console.groupEnd()

//level 2
for (let i = 0; i <= 10; i += 1) {
  let errorMessage = 'the # is not even'
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, {i,errorMessage})
}

console.assert(10 > 2 * 10, '10 is greater than 20')

console.warn('This is warning message')
console.error('this is error message')

//level 3
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.time('for loop')
for(let i=0; i<countries.length; i++){
  console.log(countries[i][0],countries[i][1])
}
console.timeEnd('for loop')

console.time('forEach loop')
countries.forEach(([name,capital]) =>{
  console.log(name,capital)
})
console.timeEnd('forEach loop')

console.time('for of loop')
for(const [name,capital] of countries){

  console.log(name,capital)
}
console.timeEnd('for of loop')