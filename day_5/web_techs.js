let webTechs = ['html', 'css', 'javascript', 'vue', 'angular', 'react', 'mongodb'];
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')
}
else{
    webTechs.push('Sass')
    console.log(webTechs)
};

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


//Exercise level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let ascendingAges = ages.sort();
console.log(ascendingAges);
let minAge = ascendingAges[0];//Math.min(...ascendingAges)
let maxAge = ascendingAges[ascendingAges.length -1];
console.log(minAge);
console.log(maxAge);


let middleAge = ascendingAges[Math.floor(ascendingAges.length/2)];
console.log(middleAge);
let medianAge = (middleAge + ascendingAges[6]) / 2;
console.log(medianAge);
numberOfItems = ascendingAges.length;

let averageAge;
for (i = 0; i < ascendingAges.length; i++){
    let totalAge = 0;
    totalAge += ascendingAges[i];
    averageAge = totalAge / numberOfItems;
};
console.log(averageAge);
let ageRange = maxAge - minAge;
console.log(ageRange);

let value_1 = Math.abs(maxAge - averageAge);
let value_2 = Math.abs(minAge - averageAge);
console.log(value_1);
console.log(value_2);
console.log(value_1 > value_2);


