//loop through 0-10
for(let i = 0; i <= 10; i++){
    console.log(i)
};
 //while loop
let i = 0;
while (i <=10){
    console.log(i)
    i++
};
//do-while loop
let i = 0;
do{
    console.log(i)
    i++
} while(i <= 10);
 //loop through 10-0
for(let j =10; j >= 0; j--){
    console.log(j)
};

let j =10;
while(j >= 0){
    console.log(j)
    j--
};
//loop through 0-n
let n =Number(prompt('Enter number'))
for(let i= 0; i <=n; i++ ){
    console.log(i)
};

//loop hash(#) 7 times
let hash = '';
for(let a = 1; a <= 7; a++ ){
    hash += '#'
    console.log(hash);
}
//table of 10
for(m = 0; m <= 10; m++){
    console.log(`${m} * ${m} = ${m * m}`)
};
 
for(i = 0; i <=10; i++){
    console.log(`${i} ${i**2} ${i**3}`)
};

//loop through 0-100 and print even numbers
for(e = 0; e <= 100; e++){
   if(e % 2 != 0){
       continue
   }
       console.log(e) 
};

//loop through 0-100 and print odd numbers
for(f = 0; f <= 100; f++){
    if(f % 2 == 0){
        continue
    }
        console.log(f) 
 }; 

 //loop through 0-100 and print sum of all numbers
 let sum = 0
 for(h=0; h<=100; h++){
     sum += h;
 }
 console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);


//sum of all even and sum of odd numbers from 0-100
let sumOfOdd = 0
let sumOfEven = 0
for(k = 0; k <= 100; k++){
    if(k % 2 == 0){
        sumOfEven += k
    }
    else if(k % 2 != 0){
        sumOfOdd += k;
     }
  };
  console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdd}.`);
  //sum of evens and sum of odds as array
 let array=[]
 array.push(sumOfEven)
 array.push(sumOfOdd)
 console.log(array);

//array of 5 random numbers
 let randomArray =[];//do again
 for(let m =0; m<5; m++){
     let randomFive =Math.floor(Math.random() * 20)
    randomArray.push(randomFive);

 } 
 console.log(randomArray);
 
 //array of 5 random  unique numbers
let randomUnique =[];//hard
for(let n=0; n<5; n++){
    let random = Math.floor(Math.random() * 20)
    if(randomUnique.indexOf(random) == -1)  {
    randomUnique.push(random)
}
}
console.log(randomUnique);

// six characters random id
let randomId ='';//hard
let characters ='123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
for(let o=0; o<6; o++){
    let randomChar = Math.floor(Math.random() *characters.length);
    randomId += characters.charAt(randomChar);//randomId += characters[randomChar]
}
console.log(randomId);

