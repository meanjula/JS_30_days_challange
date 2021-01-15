let firstName = 'Anjula';
let lastName = 'Ghale';
let city = 'Helsinki';
    age = 90;
    isMarried = true;
    thisYear = 2020;
console.log(typeof true);
console.log(typeof 'Helsinki');
console.log(typeof 2020);

let number = 10;
console.log(typeof 10 == 10);
console.log(parseInt('9.8') == 10);

console.log(isMarried);
console.log(10>3);
console.log(typeof true == "boolean");

console.log(typeof 90 == "age");
console.log(typeof 'Anjula' == firstName);
console.log(5<4);

console.log(4<3);
console.log(4>=3);
console.log(4==4);
console.log(4!=4);
console.log(4!='4');
console.log(4==='4');

let text ='python';
let text_2 ='jargon';
console.log(text.length);
console.log(text.length != text_2.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(false));
console.log(!(4 > 3 && 10 > 12));
let text_3 = 'dragon';
console.log(text_3.includes('on') == text.includes('on'));

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getTime());
console.log(Date.now());

//level 2
//Area of a triangle
let base = 20
let height = 10
const area_1 = 0.5 * base * height
console.log(`The area of triangle is ${area_1}.`);
 //Perimeter of atriangle
let sideA = 5;
let sideB = 4;
let sideC = 3;
const perimter = sideA + sideB + sideC;
console.log(`The perimeter of the triangle is ${perimter}`);

// Area and Perimeter of a rectangle
let length = Number(prompt('Enter length of rectangle:'));
let width = Number(prompt('Enter width of rectangle:'));
let areaOfRectangle = length * width;
let periMeterOfRectangle = 2 * (length + width);
console.log(`Area of rectangle is: ${areaOfRectangle}`);
console.log(`Perimeter of rectangle is: ${periMeterOfRectangle}`);

// Area and Perimeter of a circle
let radius = Number(prompt("enter radius of a circle:"));
const pi = 3.14
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`The area of circle is: ${areaOfCircle}`);
console.log(`The perimeter of circle is: ${circumference}`);
 
//weekly earning
let hours = Number(prompt("Enter hours:", 40));
let ratePerHour = Number(prompt("Enter rate per hour:", 28));
let weeklyEarning = hours * ratePerHour;
console.log(`Your weekly earning is: ${weeklyEarning}`);

//Name length
let name = prompt("Enter your name:");
if (name.length >= 7){
    alert('your name is long')
}
else{
    alert('your name is short')
};
console.log(name);

console.log(firstName.length > lastName.length);
console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}.`);

//Age difference between two people
let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge; 
console.log(`I am ${ageDifference} years older than you.`);

//driving age of person
let birthYear = Number(prompt("Enter birth year:", 1995));
let userAge = 2020 - birthYear;
let yearRemain =18 - userAge;
if(userAge >= 18){
    console.log(`You are ${userAge}. You are old enough to drive
    `)
}
else{
    console.log(`You are ${userAge}. You will be allowed to drive after ${yearRemain}years.
    `)
};

//number of sec user lived
let yearsLive = Number(prompt('Enter numbers of years you live:'));
let secondsInSecond =  60;
let secondInHour = secondsInSecond * 60 ;
let secondInDay = secondInHour * 24;
let secondInYear = secondInDay * 365;
let secondOld = secondInYear * yearsLive;
console.log(`you are ${secondOld} seconds olds`);

//date time object
const now = new Date()
const year = now.getFullYear();
console.log(year);
const month =now.getMonth();
const day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
if(hours < 10){
    hours = '0' + hours
}
if(minutes < 10){
   minutes = '0' + minutes
}
let YYYYMMDD =`${year}-${month}-${day}-${hours}:${minutes}`
console.log(YYYYMMDD);
let DDMMYYYYHHmm =`${day}/${month}/${year}-${hours}:${minutes}`
console.log(DDMMYYYYHHmm);
