import { memoize } from './memoize';

const computeFactorial = (num) => {
  let result = 1;

  for (var i = 2; i <= num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
};

const computeFactorialRecursively = (num) => {
  if (num === 1) {
    console.log('hit the base case');
    return 1;
  } else {
    console.log(`returning ${num} * computeFactorial(${num - 1})`);
    return num * computeFactorialRecursively(num - 1);
  }
};

const factorial = memoize((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});

export { computeFactorial, computeFactorialRecursively, factorial };
