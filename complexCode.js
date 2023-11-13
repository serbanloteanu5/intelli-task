/*

Filename: complexCode.js

Description: This code demonstrates a complex algorithm for finding all possible permutations of a given array of numbers.

*/

// Function to find all permutations of a given array
function findAllPermutations(arr) {
  // Base case: return the array itself if it has only one element
  if (arr.length === 1) {
    return [arr];
  }

  let permutations = []; // Array to store all permutations

  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];

    // Generate all permutations excluding the current element
    let remainingElements = arr.filter((_, index) => index !== i);
    let innerPermutations = findAllPermutations(remainingElements);

    // Append the current element to each inner permutation
    innerPermutations.forEach((permutation) => {
      permutations.push([currentElement, ...permutation]);
    });
  }

  return permutations;
}

// Test the findAllPermutations function
let numbers = [1, 2, 3];
let permutations = findAllPermutations(numbers);

// Print all permutations
console.log("All permutations:");
permutations.forEach((permutation) => {
  console.log(permutation);
});