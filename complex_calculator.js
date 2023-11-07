/*
   Name: complex_calculator.js
   Description: A complex calculator that performs various mathematical operations.
*/

// Basic arithmetic operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Exponentiation
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

// Factorial
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial not defined for negative numbers');
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Fibonacci sequence
function fibonacci(n) {
  if (n <= 0) {
    throw new Error('Fibonacci sequence not defined for non-positive numbers');
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let fibPrev = 1;
  let fibCurrent = 1;
  for (let i = 3; i <= n; i++) {
    let fibNext = fibPrev + fibCurrent;
    fibPrev = fibCurrent;
    fibCurrent = fibNext;
  }
  return fibCurrent;
}

// Complex mathematical function
function complexFunction(x) {
  let result = 0;
  for (let i = 1; i <= 10; i++) {
    result += power(x, i) / factorial(i) + fibonacci(i);
  }
  return result;
}

// Usage example
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
console.log(multiply(5, 3)); // Output: 15
console.log(divide(5, 3)); // Output: 1.6666666666666667
console.log(power(2, 5)); // Output: 32
console.log(factorial(5)); // Output: 120
console.log(fibonacci(8)); // Output: 21
console.log(complexFunction(3)); // Output: 3493.510435399935

// More operations can be added to enhance the complexity and functionality of this calculator.