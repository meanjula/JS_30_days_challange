sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
let pattern = /[%!%#&#@$?.;]/g

let cleanText =(strin)=>{
return strin.replace(pattern,'')
}
console.log(cleanText(sentence))

let cleanedText ='I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher.'
let mostFrequentWords = (str,num)=>{
    let pattern = /\w+/g
    let sentArray =str.match(pattern)
   console.log(sentArray)
   let sentSet = new Set(sentArray)
   let countWordArray =[]
   for(const word of sentSet){
       let filteredWord = sentArray.filter((words) =>words ===word)
       let obj = {word:word, count:filteredWord.length}
       countWordArray.push(obj)
   }
   console.log(countWordArray,num)
   let threeFrequentWord = countWordArray.slice(0,num)
   console.log(threeFrequentWord)
}
mostFrequentWords(cleanedText,3)

