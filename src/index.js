console.log('you are ready to start coding...');
import { expect } from './expect';
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

// import { linearSearch, linearSearchObjArray } from './linearSearch';
// console.log(linearSearch([2, 6, 7, 90, 103], 90));
// console.log(linearSearchObjArray(emps, 'name', 'sam'));

import { binarySearch, binarySearchObjArr } from './binarySearch';
// console.log(binarySearch([2, 6, 7, 90, 103], 90));
// expect(binarySearch([2, 6, 7, 90, 103], 90)).toBe({ guess: 3, result: 90 });
// console.log('searching by age');
// console.log(binarySearchObjArr(emps, 'age', 4)); // 3 does not work though
// console.log('searching by name');
// console.log(binarySearchObjArr(emps, 'name', 'john')); // this will not work because they are not in order

// now lets sort by age and all should work
import { sort } from './sort';
// let sortedEmps = sort(emps, 'age', true);
// console.log(sortedEmps);
// console.log('searching by age');

// console.log(binarySearchObjArr(sortedEmps, 'age', 50));
// let sortedEmps = sort(emps, 'name', true);
// console.log(sortedEmps);
// console.log('searching by name');
// console.log(binarySearchObjArr(sortedEmps, 'name', 'john'));

import {
  bubbleSort,
  bubbleSortOptimized,
  bubbleSortObjArray,
  bubbleSortOptimizedObjArray,
} from './bubbleSort';
const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrderd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log('bubble sort');
// console.log(bubbleSort(arrayRandom.slice(), false));
// console.log(bubbleSort(arrayOrderd.slice(), false));
// console.log(bubbleSort(arrayReversed.slice(), false));

// console.log('optimized');
// console.log(bubbleSortOptimized(arrayRandom.slice(), false));
// console.log(bubbleSortOptimized(arrayOrderd.slice(), false));
// console.log(bubbleSortOptimized(arrayReversed.slice(), false));

// console.log('bubble sort');
// console.log(bubbleSortObjArray(emps, 'age', true));
// console.log(bubbleSortOptimizedObjArray(emps, 'age', false));

// import { mergeSort } from './mergeSort';
// // const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
// const list = [2, 9, 3, 6];
// console.log(mergeSort(list, false));

// import { mergeSortObjArray } from './mergeSortOjbArray';
// console.log(mergeSortObjArray(emps, 'age', false));

// import { makeChange } from './greedy';
// // console.log(makeChange([5, 10, 25], 40));
// console.log(makeChange(40));

// import Stack from './stack';
// const myStack = new Stack();
// console.log(myStack);
// myStack.push({ name: 'timmy', age: 24 });
// console.log(myStack);
// myStack.push({ name: 'jenny', age: 29 });
// console.log(myStack);
// myStack.push({ name: 'jericho', age: 14 });
// console.log(myStack);
// let lastValue = myStack.pop();
// console.log(myStack);
// console.log('lastValue', lastValue);
// lastValue = myStack.pop();
// console.log(myStack);
// console.log('lastValue', lastValue);
// lastValue = myStack.pop();
// console.log(myStack);
// console.log('lastValue', lastValue);
// console.log(myStack);

const addTen = (x) => {
  return x + 10;
};

const addTwenty = (x) => {
  return x + 20;
};

// myStack.push(addTen);
// console.log(myStack);
// myStack.push(addTwenty);
// console.log(myStack);
// const func1 = myStack.pop();

// console.log(func1(10));

// const func2 = myStack.pop();
// console.log(func2(10));

// import Queue from './queue';
// const myQueue = new Queue();
// myQueue.enqueue({ name: 'one', age: 1 });
// myQueue.enqueue({ name: 'two', age: 2 });
// myQueue.enqueue({ name: 'three', age: 3 });
// console.log(myQueue);
// const r1 = myQueue.dequeue();
// console.log(r1);
// console.log(myQueue);
// const peek = myQueue.peek();
// console.log(peek);
// const equation1 = addTen(r1.age);
// console.log(equation1);
// const r2 = myQueue.dequeue();
// console.log(r2);
// const equation2 = addTwenty(r2.age);
// console.log(equation2);

// import LinkedList from './LinkedList';
// const myList = new LinkedList();
// const item1 = { name: 'one', age: 1 };
// myList.append(item1);
// console.log(myList);
// const item2 = { name: 'two', age: 2 };
// myList.append(item2);
// console.log(myList);
// const node = myList.remove(item1);
// console.log(node);
// console.log(myList);

// import SingleLinkedList from './SingleLinkedList';
// const myList = new SingleLinkedList(1);

// myList.insert(2);
// myList.insert(3);
// myList.insert(4);
// // myList.removeTail();
// myList.remove(3);
// console.log(myList);
// console.log(myList.contains(2));

// import HashTable from './HashTable';
// const myHash = new HashTable();
// myHash.insert('a', 1);
// myHash.insert('b', { name: 'bergie', age: 20 });
// myHash.insert('c', 5);
// console.log(myHash);
// const r1 = myHash.retrieve('b');
// console.log(r1);
// const r2 = myHash.remove('b');
// console.log('deleted', r2);
// console.log(myHash);

// import Tree from './Tree';
// const abe = new Tree('abe');
// const homer = new Tree('homer');
// const bart = new Tree('bart');
// const lisa = new Tree('lisa');
// const maggie = new Tree('maggie');

// abe.children.push(homer);
// homer.children.push(bart, lisa, maggie);
// //abe.remove(abe, 'lisa');
// abe.traverse(abe);
// console.log(abe);
// console.log('searching for lisa');
// const r1 = abe.find(abe, 'lisa');
// console.log(r1);
// console.log(abe.contains('lisa'));
// console.log(abe.contains('puppy'));
// console.log(abe.size(abe));
// abe.insert(abe, 'puppy');
// console.log(abe);

// import BinaryTree from './BinaryTree';
// const myTree = new BinaryTree(1);
// myTree.insertChild('child1');
// myTree.insertChild('second Child');
// myTree.insertChild('third child');
// myTree.insertChild('fourth Child');
// myTree.insertChild('fifth Child');
// console.log(myTree);
// myTree.inOrderTraversal();
//                  1
//     child1                       secondChild
// // thirdChild - fourthChild       fifthChild
// console.log('the whole tree', myTree);
// myTree.preOrderTraversal();
// myTree.postOrderTraversal();
// console.log(myTree.contains('second Child'));

// import BinarySearchTree from './BinarySearchTree';
// const myTree = new BinarySearchTree();
// myTree.insert(10);
// myTree.insert(5);
// myTree.insert(15);
// myTree.insert(4);
// myTree.insert(2);
// myTree.insert(3);

// console.log(myTree);
// console.log(myTree.contains(7));
// console.log(myTree.min(myTree.root));
// console.log(myTree.max(myTree.root));
//myTree.remove(2);
//console.log(myTree);
// myTree.inOrderTraversal(myTree.root);
// myTree.preOrderTraversal(myTree.root);
// myTree.postOrderTraversal(myTree.root);

// create a graph that looks like this
import AdjacencyGraph from './AdjacencyGraph';
// const myGraph = new AdjacencyGraph();
// myGraph.addVertex(1);
// myGraph.addVertex(2);
// myGraph.addVertex(3);
// myGraph.addVertex(4);
// myGraph.addVertex(5);
// myGraph.addVertex(6);
// myGraph.addVertex(7);

// // connect 1 to 2
// myGraph.addEdge(1, 2);
// // connect 1 to 4
// myGraph.addEdge(1, 4);
// // connect 2 to 3
// myGraph.addEdge(2, 3);
// // connect 4 to 3
// myGraph.addEdge(4, 3);
// // connect 3 to 5
// myGraph.addEdge(3, 5);
// // connect 5 to 6
// myGraph.addEdge(5, 6);
// // connect 5 to 7
// myGraph.addEdge(5, 7);

// console.log(myGraph);

// const bfsResult1 = myGraph.bfs(1);
// console.log(bfsResult1);
// const bfsResult2 = myGraph.bfs(4);
// console.log(bfsResult2);
// const dfs1 = myGraph.dfs(1);
// console.log(dfs1);
// const dfs2 = myGraph.dfs(4);
// console.log(dfs2);

// import AdjacencyGraphObj from './AdjacencyGraphObj';
// const myAdj = new AdjacencyGraphObj();
// const p1 = { id: 1, name: 'sally', age: 25 };
// const p2 = { id: 2, name: 'bily', age: 27 };
// const p3 = { id: 3, name: 'timmy', age: 17 };
// const p4 = { id: 4, name: 'bertha', age: 19 };
// const p5 = { id: 5, name: 'alex', age: 26 };
// const p6 = { id: 6, name: 'terry', age: 21 };
// const p7 = { id: 7, name: 'beth', age: 22 };

// myAdj.addVertex(p1.id);
// myAdj.addVertex(p2.id);
// myAdj.addVertex(p3.id);

// // connect p1 to p2
// myAdj.addEdge(p1, p2);
// // connect p1 to p4
// myAdj.addEdge(p1, p4);
// //connect p2 to p3
// myAdj.addEdge(p2, p3);
// // connect p4 to p3
// myAdj.addEdge(p4, p3);
// // connect p3 to p5
// myAdj.addEdge(p3, p5);
// // connect p5 to p7
// myAdj.addEdge(p5, p7);
// // connectc p5 to p6
// myAdj.addEdge(p5, p6);

// // disconnect 5 from 6
// // myAdj.removeEdge(p5, p6, true);
// // myAdj.removeVertex(p6, true);
// // myAdj.removeEdge(p5.id, p6.id);
// myAdj.removeVertex(p6.id);

// console.log(myAdj);

const myGraph = new AdjacencyGraph();
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(7);
myGraph.addVertex(8);
myGraph.addVertex(9);

myGraph.addEdge(1, 2);
myGraph.addEdge(2, 5);
myGraph.addEdge(5, 9);
myGraph.addEdge(1, 3);
myGraph.addEdge(3, 6);
myGraph.addEdge(3, 7);
myGraph.addEdge(1, 4);
myGraph.addEdge(4, 8);

console.log(myGraph);
const bfs = myGraph.bfs(1);
console.log(bfs);
// const dfs = myGraph.dfs(1);
// console.log(dfs);
