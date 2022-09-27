console.log('you are ready to start coding...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';
main.appendChild(child);
root.appendChild(main);

// import { uniquSortObj } from './sort';
// console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));
//console.log(uniqSort([4, 3, 3, 2, 2, 1], false));

import { emps } from './data';

// console.log(uniquSortObj(emps, 'name', true));
// console.log(uniquSortObj(emps, 'name', false));

// console.log(uniquSortObj(emps, 'birthdate', true));
// console.log(uniquSortObj(emps, 'birthdate', false));

// import { unique } from './unique';
// const sortedEmps = unique(emps, 'name');
// console.log(sortedEmps);

// import { sort } from './sort';
// console.log(sort(sortedEmps, 'birthdate', false));

// import { memoTimes10 } from './memoize';
// console.log('calculated value', memoTimes10(9));
// console.log('cached value', memoTimes10(9));

// const memoFn = memoTimes10();
// console.log(memoFn(9));
// console.log(memoFn(9));

import { curry } from './curry1';
// const addTwo = add(2);
// console.log(addTwo);
// console.log(addTwo(4));
// console.log(addTwo(10));

const multiply = (x, y) => {
  return x * y;
};

const times2 = curry(multiply);
//const result = times2(5)(2);
const curriedTimes = times2(5);
const result = curriedTimes(2);
// console.log(result);

const takes3Args = (x, y, z) => {
  return x + y + z;
};

// const curriedTakes3 = curry(takes3Args)(1)(2)(3);
// console.log(curriedTakes3);
const fn1 = curry(takes3Args);
const fn2 = fn1(3);
const fn3 = fn2(3);
const fn4 = fn3(3);
// console.log(fn4);

import { pipe } from './pipe';

// console.log('composition');
const addOne = (n) => n + 1;
const double = (n) => n * 2;
const add1ThenDouble = pipe(double, addOne);
// console.log(add1ThenDouble(2));

const data = [
  {
    name: 'bananas',
    price: 3.99,
    category: 'fruit',
  },
  {
    name: 'apples',
    price: 1.0,
    category: 'fruit',
  },
  {
    name: 'milk',
    price: 2.0,
    category: 'dairy',
  },
  {
    name: 'cheese',
    price: 1.0,
    category: 'dairy',
  },
];

// const getByCategory = (arr, desc) => {
//   return arr.filter((i) => i.category == desc);
// };

// const curriedGetByCategory = curry(getByCategory);
// const getFruits = curriedGetByCategory(data)('fruit');
// console.log(getFruits);
// const getCategories = curriedGetByCategory(data);
// const dairy = getCategories('dairy');
// console.log(dairy);
// const fruits = getCategories('fruit');
// console.log(fruits);

// const getFruits = (arr) => {
//   return arr.filter((i) => i.category === 'fruit');
// };

// const getTotal = (n) => {
//   return n.reduce((acc, curr) => {
//     return parseFloat(acc) + parseFloat(curr.price);
//   }, 0);
// };

// const fruitTotal = pipe(getTotal, getFruits);
// const fruitTotals = fruitTotal(data);
// console.log(fruitTotals);

// console.log('memoizing again...');
// const times5 = (x) => x * 5;
// import { memoize } from './memoize';
// const memoized = memoize(times5);
// console.log(memoized(2));
// console.log(memoized(10));
// console.log(memoized(10));

// console.log('factorials');
// import { computeFactorial } from './factorial';
// console.log(computeFactorial(5));

// import { computeFactorialRecursively } from './factorial';
// console.log(computeFactorialRecursively(5));

// import { logNumbers } from './looping';
// logNumbers(1, 5);

// import { logNumbersRecursively } from './looping';
// logNumbersRecursively(1, 5);

// import { joinElements } from './accumulator';
// console.log(joinElements(['s', 'cr', 't cod', ' :) :)'], 'e'));

// import { factorial } from './factorial';
// console.log(factorial(5));
// // if we call this again, we wont have to do all the work
// console.log(factorial(5));

import { linearSearch, linearSearchObjArray } from './linearSearch';
console.log(linearSearch([2, 6, 7, 90, 103], 90));
console.log(linearSearchObjArray(emps, 'name', 'sam'));
