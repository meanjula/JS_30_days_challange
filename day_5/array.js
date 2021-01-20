let array = Array();
console.log(array); 

let fruits =['apple', 'banana', 'orange', 'kiwi', 'grapes'];
console.log(fruits.length);

console.log(fruits[0]);//first item
let lastIndex = fruits.length - 1;
console.log(fruits[lastIndex]);
let middleIndex = fruits.length - 3;
console.log(fruits[middleIndex]);

let mixedDataTypes = ['Anjula', 'Timsina', 25, 'Finland', true, 2020 ];
console.log(mixedDataTypes.length);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length-1];
console.log(firstCompany);//first company
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(middleCompany);//middle company
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(lastCompany);//last company

 //each company name to uppercase
 console.log(firstCompany.toUpperCase());
 console.log(itCompanies[1].toUpperCase());
 console.log(itCompanies[2].toUpperCase());
 console.log(middleCompany.toUpperCase());
 console.log(itCompanies[4].toUpperCase());
 console.log(itCompanies[5].toUpperCase());
 console.log(lastCompany.toUpperCase());

let companyInString = itCompanies.toString();
console.log(`${companyInString} are big IT companies.`);


let company = prompt('Enter IT company name');
if(itCompanies.includes(company)){
    console.log(`${company}`)
}
else{
    console.log('company not found')
};

//2nd method
let index = itCompanies.indexOf('company');
if(index != -1){
    console.log(`${company}`)
}
else{
    console.log('company not found')
};

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(3, 4));
console.log(itCompanies.slice(4, itCompanies.length));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 4));

console.log(itCompanies.pop());
console.log(itCompanies.shift());
console.log(itCompanies.splice((3, 1)));
console.log(itCompanies);
itCompanies.length = 0;

