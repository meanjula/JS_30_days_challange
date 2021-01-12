//single line variable
let Name = 'Suja';
    birthYear = 1999;
    isGirl = true;
    language ='undefined';
console.log(typeof 'Suja');
console.log(typeof 1999);
console.log(typeof true);
console.log(undefined);

let challange = '30 Days Of JavaScript';
console.log(challange);
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase('of'));
console.log(challange.substr(3, 4));
console.log(challange.substring(0, 2));
console.log(challange.substr(4, 4));
console.log(challange.substring(3));
console.log(challange.includes('Script'));
console.log(challange.split());
console.log(challange.split(' '));

let platform = 'Facebook, Google, Microsoft, apple, IBM, Oracle, Amazon';
console.log(platform.split(', '));

console.log(challange.replace('JavaScript', 'Python'));
console.log(challange.charAt(15));
console.log(challange.charCodeAt(11));
console.log(challange.indexOf('a'));
console.log(challange.lastIndexOf('a'));
console.log(challange.charAt(11));

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));

console.log(challange.trim());
console.log(challange.startsWith(30));
console.log(challange.endsWith('Script'));
console.log(challange.match(/a/gi));
console.log(challange.concat(" 30 Days Of", "JavaScript"));
console.log(challange.repeat(2));