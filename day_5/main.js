let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
textArray = text.split(' ');
console.log(textArray);
console.log(textArray.length);

//shopping cart removing and adding items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart.includes('Meat'));
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.pop();
shoppingCart.push('sugar');
console.log(shoppingCart.indexOf('Tea'));
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);