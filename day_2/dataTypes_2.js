//level 1
let challenge = "30 Days Of JavaScript"
console.log(challenge);
console.log(challenge.toLowerCase());
console.log(challenge.toUpperCase());
console.log(challenge.length);
console.log(challenge.substr(0, 2));
console.log(challenge.substring(2,(challenge.length)));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
console.log(challenge.indexOf("j"));

let techComp = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon"
console.log(techComp.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.indexOf("J"));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let sent = "You cannot end a sentence with because because because is a conjunction";
console.log(sent.indexOf("because"))
console.log(sent.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith("3"));
console.log(challenge.endsWith("t"));
console.log(challenge.match(/a/g));
let conc = "30 Days Of "
console.log(conc.concat("JavaScript"));
console.log(challenge.repeat(2));

//level 2
let text = "Love is the best thing in this world.Some found their love and some are still looking for their love";
console.log(text);

let numb = '10';
console.log(typeof '10')
let numInt = Number(numb);
console.log(numInt);

let floatnum ='9.8';
let floatInt = Number(floatnum);
console.log(floatInt === 10)
let wholeTen = Math.ceil(floatInt);
console.log(wholeTen);
let web = 'Python'
console.log(web.includes('on'));
//random number between 0-100
let randomNum = Math.floor(Math.random()*101) 
console.log(randomNum)
//random number between 50-100
let fiftyToHun = Math.floor(Math.random()*51+50) 
console.log(fiftyToHun);

//access character using random number
let str = 'JavaScript'
let strChr = Math.floor(Math.random()*str.length);
console.log(str.charAt(strChr));
 //escape sequence
console.log('1\t1\t1\t1');
console.log('5\t1\t5\t25\t125');

//level 3
let textOne = "Love is the best thing in this world.Some found their love and some are still looking for their love";
console.log(textOne.match(/love/gi));
let sente = "You cannot end a sentence with because because because is a conjunction";
let pattern =/because/gi
console.log(sente.match(pattern));
console.log(sente.search('because'));
console.log(sente.lastIndexOf('because'));
console.log(sente.substr(31, 23));
//cleaning the text 
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern1 = /[%@#£&$?!]/g
console.log(sentence.replace(pattern1, ''));

//total annual income
let textTwo = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbReg = /\d+/g
console.log(textTwo.match(numbReg));
let yearlySalary = 5000 * 12;
let yearlyBonus = 10000
let yearlyOnlineIncome = 15000 * 12;
let totalIncome = yearlySalary + yearlyBonus + yearlyOnlineIncome
console.log(totalIncome);
