//function without parameter
function printName(){
    let firstName = 'Anjula'
    let lastName = 'Ghale'
    let space = ' '
    let fullName = firstName+space+lastName
    return fullName
}
console.log(printName());

function addNumbers() {
    let a = 2
    let b = 3
    let sum = a + b
    return(sum)
}
console.log(addNumbers());

//function with 2 parameters
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(fullName('Anjula', 'Ghale'))

function addNumber(c, d) {
    return(c+d);
}
console.log(addNumber(7,5));
//An area of a rectangle
function areaOfRectangle(length, width){
let area =length * width;
return area;
}
console.log(areaOfRectangle(5, 6));

//A perimeter of a rectangle
function perimeterOfRectangle(length, width){
    let perimeter = 2*(length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(4, 6));

//A volume of a rectangular prism
function volumeOfRectPrism(length, width, height){
  let  volume = length * width * height;
  return volume; 
}
console.log(volumeOfRectPrism(4, 3, 2));

//Area of a circle
function areaOfCircle(r){
    const PI = 3.14 
    let area = PI * r * r;
    return area;
}
console.log(areaOfCircle(4));

//Circumference of a circle
function circumOfCircle(r){
    const PI = 3.14;
    let circumference = 2*PI*r;
    return circumference
}
console.log(circumOfCircle(3));
//Density of a substance
function density(mass, volume){
    let density = mass*volume;
    return density;
}
console.log(density(3, 2));

//speed of a moving object
function speed(totalDistance, timeTaken){
    let speed = totalDistance / timeTaken;
    return speed;
}
console.log(speed(20, 2));

//weight of a substance
function weight(mass, gravity){
    let weight =mass *gravity;
    return weight;
}
    
console.log(weight(5, 4));

//temperature in oC
function convertCelciusToFahrenheit(oC){
    let oF = (oC * 9/5) + 32;
    return oF;
}
console.log(convertCelciusToFahrenheit(30));

//BMI of a person
function bodyMassIndex(weight, height){
    let BMI = weight/(height*height);
    if(BMI < 18.5){
        return('Underweight')
    }
    else if(BMI < 24.9){
        return('Normal')
    }
    else if(BMI < 29.9){
        return('Overweight')
    }
    else if(BMI >= 30){
        return('Obese')
    }
}
console.log(bodyMassIndex(11, 0.86));

// function called checkSeason that returns the season
function checkSeason(month){
    switch(month){
        case 'january':
        case 'feburary':
        case 'march':
            return('spring')
            break;
        case 'april':
        case 'may':
        case 'june': 
            return('summer');
            break;
        case 'july':
        case 'august':
        case 'september':
            return('autumn');
            break;
        case 'october':
        case 'november':
        case 'december':
            return('winter');
            break;
    }
}
console.log(checkSeason('december'));

//maximum and minumum function
function findMax(){
    let max = -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(max<arguments[i]){
            max = arguments[i];
            return(max);
        }
    }
}
console.log(findMax(0, 10, 5));
console.log(findMax(-10, 0, -40));

/*var num = [4,5,1,3];
console.log(Math.max.apply(null, num));*/

function repeatstring(str, times){
    if(times>0){
        console.log(str.repeat(times))
    }
    else{
        return '';                                  
    }
}
repeatstring('string', 4)