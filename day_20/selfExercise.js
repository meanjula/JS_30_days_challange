
// bad
const original = { a: 1, b: 2 };
const copy1 = Object.assign({}, original, { c: 3 }); // copy1 => { a: 1, b: 2, c: 3 }
// good code
const original1 = { a: 1, b: 2 };
const copy = { ...original1, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

//converting array-like object to array
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
// bad
const arr = Array.prototype.slice.call(arrLike);
// good
const arr1 = Array.from(arrLike);

//bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
//bad
function fun(obj) {
  obj.key = 1;
}

// good
function funn(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}

