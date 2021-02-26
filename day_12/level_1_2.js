let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern =/\d+/g
let earningDigits = text.match(pattern)
let yearlySalary = 12 * 4000
let annualBonus = 10000
let yearlyOnline = 12 * 5500
let AnnualIncome = yearlySalary + annualBonus + yearlyOnline
console.log(AnnualIncome)

let sent = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
let pattern1 = /-?\d+/g
let points = sent.match(pattern1)
console.log(points)
let sortedPoints = points.sort((a,b)=>a-b)
console.log(sortedPoints)
let distance =sortedPoints[sortedPoints.length-1] - sortedPoints[0];
console.log(distance)
//pattern which identify if a string is a valid JavaScript variable


let regex = /^[A-Za-z_$][^.-][A-Za-z0-9_$]*/

let is_valid_variable = (variable) =>{
    if(variable.match(regex)){
        return true
    }
    else{
        return false
    }

}
console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first.name'))
console.log(is_valid_variable('1first_name')) 
console.log(is_valid_variable('firstname'))

//level two
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

let tenMostFrequentWords = (str,num) =>{
    let regex1 =/\w+/g
    let paraArray = str.match(regex1)
    const paraSet = new Set(paraArray)
    let wordCountArr =[]
    
    for(const word of paraSet){
        const filteredWord = paraArray.filter((words) => words===word)
        console.log(filteredWord)
        let obj ={word:word, count:filteredWord.length}
        wordCountArr.push(obj)
    }
    let sortedWordCount = wordCountArr.sort((a,b) =>  (a.count > b.count ? -1 : 1))
    console.log(sortedWordCount)
    let tenFrequentWords = sortedWordCount.slice(0,num)
    console.log(tenFrequentWords)
}
tenMostFrequentWords(paragraph, 10)