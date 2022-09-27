console.log('you are ready to start coding...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';
main.appendChild(child);
root.appendChild(main);

import { uniquSortObj } from './sort';
// console.log(uniqSort([4, 2, 2, 3, 2, 2, 2]));
//console.log(uniqSort([4, 3, 3, 2, 2, 1], false));

import { emps } from './data';

console.log(uniquSortObj(emps, 'name', true));
console.log(uniquSortObj(emps, 'name', false));
