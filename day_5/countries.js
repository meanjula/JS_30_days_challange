let countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}
else{
    countries.push('Ethiopia')
};
console.log(countries);
//console.log(countries.slice(0, 10));
let middleCountry = Math.floor(countries.length / 2);

if(countries.length % 2 == 0){
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1, countries.length));
}
else{
    countries.push('russia');
    let b = countries.length / 2;
    console.log(countries.slice(0, b ));
    console.log(countries.slice(b + 1, countries.length));
};