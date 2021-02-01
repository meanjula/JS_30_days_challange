function printArray(arr){
    const newArr =[];
    for(const element of arr){
      newArr.push(element);
      console.log(newArr)  
} 
}       
printArray([1, 2, 3]);
printArray(['sita', 'gita', 'sarita']);


printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])

//showDateTime function
function showDateTime(){
    let now = new Date();
    const year = now.getFullYear();
    const month =now.getMonth();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    let DDMMYYYYHHmm =`${day}/${month}/${year} ${hour}:${minute}`
    return(DDMMYYYYHHmm)
}
console.log(showDateTime());

function swapValue(a, b){
    let x = b;
    let y = a;
    console.log(x, y)

    }
swapValue(3, 5);

function reverseArray(arr){
    const reverseArr =[];
    for(const element of arr){
        reverseArr.unshift(element)
    }
    console.log(reverseArr)
}
reverseArray(['A', 'B', 'C']);

function reverseFruit(arr){   
    let reverseFruits =[]
    for(let p = arr.length-1; p>=0; p--){
        reverseFruits.push(arr[p])
    }
 console.log(reverseFruits)
 }
reverseFruit(['banana', 'orange', 'mango', 'lemon']);

function capitalizeArray(arr){
    let capitalArray = [];
    arr.forEach(function (i) {
       capitalArray.push(i.toUpperCase()) 
    }) 
    console.log(capitalArray)
}
capitalizeArray(['finland', 'sweden', 'norway', 'denmark']);

function capitalArr(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let a = arr[i].toUpperCase();
        newArr.push(a);
    }
    console.log(newArr);
}
capitalArr(["johny", "joe"]);


function addItem(item){
    let array =[1, 2, 3]
    array.unshift(item);
    console.log(array)
}
addItem(6);

function removeItem(){
    let array=[4, 5, 6]
    array.pop()
    console.log(array)
}
removeItem();

function sumOfNumbers(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++){
        sum += arr[i]; 
    }
    console.log(sum)
}
sumOfNumbers([1, 2, 3, 4]);

function sumOfOdd(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            sum += arr[i];
        }
    }
    console.log(sum)
}
sumOfOdd([1, 2, 3, 4, 5, 6, 7]);


function oddEven(num){
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
console.log(`the number of odds are ${odd}\nthe number of even are ${even}`)
}
oddEven(100);                                                                                                                                                                                                                                          


function randomUserIp(){
    let randomIp =''
    for(let i = 0; i<4; i++){
        let randomIP_1 = Math.floor(Math.random() * 255)
        randomIp += randomIP_1 
        if(i<3){
            randomIp += ':' 
        }
    }

    console.log(randomIp);
}
    
randomUserIp();

//standard format for MAC is two hexadecimal digits separated by hyphens(-)

function macAddress(){
    let hexaNum ='0123456789ABCDEF';
    let randomMac =''
    for(i=0; i<6; i++){
        let randomhex1 = Math.floor(Math.random() *16)
        let randomhex2 = Math.floor(Math.random() *16)
        randomMac += hexaNum[randomhex1];
        randomMac += hexaNum[randomhex2];
        if( i < 5){
            randomMac += '-'
        };   
    }
    console.log(`${randomMac}`);
}  
macAddress()

function randomHexaNumberGenerator(){
    let hexaNum ='0123456789ABCDEF';
    let randomHex ='#';
    for(i=0; i<6; i++){
        let randomNum = Math.floor(Math.random() *16)
        randomHex += hexaNum[randomNum];
    } 
    console.log(randomHex)   
}
randomHexaNumberGenerator()

let userIdGenerator = () => {
    let characters = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let randomUserId =''
    for(i=0; i<7; i++){
        let randomCha = Math.floor(Math.random()*characters.length)
        randomUserId += characters[randomCha]
    }
    console.log(randomUserId)
}
userIdGenerator()

//.foreach
const items = ['item1', 'item2', 'item3']
const copyItems = []
items.forEach(function(item){
  copyItems.push(item)
})
console.log(copyItems)

function shuffel(array){
    let newArray = []
for(i=array.length-1; i>=0; i--){
    newArray.push(array[i])
}    
console.log(newArray)
}
shuffel([23, 45, 12, 5])

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
}
shuffleArray([1, 2, 3, 4])

let shuffleArray_2 = (arr) => {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        let rand = Math.floor(Math.random() * arr.length);
        if (!(newArr.includes(arr[rand]))){
            newArr.push(arr[rand]);
        }
    }
    console.log(newArr) 
}
shuffleArray_2([2, 5, 3, 6]);
