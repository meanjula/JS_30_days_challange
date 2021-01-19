//user age using prompt
let userAge = prompt('Enter your age:',);
let yearsToAdult = 18 - userAge
if(userAge > 18){
    console.log('You are old enough to drive')
}
else{
    console.log(`You are left with ${yearsToAdult} years to drive.`)
};

//age comparision
let yourAge = prompt("Enter your age")
const myAge = 25;
let ageDifference = yourAge - myAge;
 if(yourAge > myAge){
     console.log(`You are ${ageDifference} years older than me`)
 } 
 else{
     console.log(`You are ${myAge - yourAge} years younger than me.`)
 };

 //number comparison
 let a = 4;
 let b = 3;
 if(a > b){
     console.log(`${a} is greater than ${b}`)
 }
 else{
     console.log(`${a} is less than ${b}`)
 };
//ternary operator
 a > b 
 ? console.log(`${a} is greater than ${b}`)
 : console.log(`${a} is less than ${b}`)

 //checking even numbers
 let checkNumber = Number(prompt('Enter your number'));
 if( checkNumber % 2 == 0){
     console.log(`${checkNumber} is a even number.`)
 }
 else{
    console.log(`${checkNumber} is a odd number.`)
 };


 //grades for students according to scores
 let score =Number(prompt('Enter your score'));
 switch(true){
     case score > 80 :
         console.log('A');
         break;
     case score > 70:
         console.log('B');
         break;
     case score > 60:
         console.log('C');
         break;
     case score > 50:
         console.log('D');
         break;
     case score > 0:
         console.log('grade F');
         break;
     default:    
         console.log('No score')
 };

 //checking season
 let month =prompt('Enter month');
 switch(month){
     case 'september':
     case 'october':
     case 'november':
         console.log('Autumn');
         break;
     case 'december':
     case 'january':
     case 'feburary':
         console.log( 'Winter');
         break;
     case 'march':
     case 'april':
     case 'may':
         console.log('Spring');
         break;
     case 'june':
     case 'july':
     case 'august':
         console.log('Summer');
         break;
     default:
         console.log('No month assigned');
 };

 //checking day

 let inputDay = prompt('What is the day today?');
 switch(inputDay){
     case 'monday':
     case 'tuesday':
     case 'wednesday':
     case 'thursday':
     case 'friday':                
         console.log(`${inputDay} is a working day.`);
         break;
     case 'saturday':
     case 'sunday':
         console.log(`${inputDay} is a weekend.`)  
         break;
     default:
         console.log('No day is entered');           
 };
 
 // checking  day in month
 let month = prompt('Enter month');
 switch(month){
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month} has 31 days.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month} has 30 days.`);
        break;
    case 'february':
        console.log(`${month} has 29 days.`);       
        break;
    default:
        console.log('invalid month');    
};
