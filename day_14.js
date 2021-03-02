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
console.table(users)

const names = ['Asabeneh', 'Brook', 'David', 'John']
console.group('Names')
console.log(names)

console.info('30 Days Of JavaScript challenge is trending on Github')
   
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.time('forEach loop')
countries.forEach(([name, city]) =>{
    console.log(name,city)
})
console.timeEnd('forEach loop')