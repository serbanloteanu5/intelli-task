/*
* Filename: sophisticated_code.js
* Description: This code showcases a sophisticated and elaborate JavaScript program.
* Author: [Author Name]
* Date: [Date]
*/

// Data structure to store customer information
class Customer {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.id = Math.floor(Math.random() * 1000);
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Address: ${this.address}`);
  }
}

// Function to fetch customer data from an API
function fetchCustomerData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
      };
      resolve(data);
    }, 2000);
  });
}

// Main program
(async function () {
  try {
    console.log('Fetching customer data...');
    const data = await fetchCustomerData();
    
    const { name, age, address } = data;
    const customer = new Customer(name, age, address);
    
    console.log('Customer Information:');
    customer.displayInfo();
  } catch (error) {
    console.error('Error occurred while fetching customer data:', error);
  }
})();

// Utility function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Demonstration of the factorial function
console.log('Factorial of 5:', factorial(5));

// Complex algorithm to find the sum of prime numbers less than a given number
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

function sumOfPrimes(limit) {
  let sum = 0;
  
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  
  return sum;
}

console.log('Sum of primes less than or equal to 10:', sumOfPrimes(10));

// Advanced sorting algorithm to sort an array of objects based on a specific property
const items = [
  { name: 'Apple', price: 2.5 },
  { name: 'Banana', price: 1.5 },
  { name: 'Orange', price: 3.0 },
];

function sortByPriceAscending(a, b) {
  return a.price - b.price;
}

console.log('Items sorted by price (ascending):', items.sort(sortByPriceAscending));
 
// ... (More code)
// Continue adding more sophisticated and elaborate code here...