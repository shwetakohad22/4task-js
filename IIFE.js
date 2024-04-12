// a. Print odd numbers in an array using an anonymous IIFE function.
let num = [10, 100, 7, 35, 59, 3, 1, 9, 5];

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})(num);

// b. Convert all the strings to title caps in a string array using IIFE function.
let array = ["shweta", "kohad"];

(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
})(array);

console.log(array);

// c. Sum of all the numbers in an array using IIFE function.
let numbers1 = [1, 2, 3, 4, 5];

let sum = (function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
})(numbers1);

console.log(sum);

// d. Return all the prime numbers in an array using IIFE function.
let numbers2 = [41, 7, 3, 10, 8, 15, 5, 2, 11];

let primes = (function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;

    if (arr[i] < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      result.push(arr[i]);
    }
  }

  return result;
})(numbers2);

console.log(primes);

// e. Return all the palindromes in an array using IIFE function.
let names = ["level", "shweta", "racecar", "mummy", "papa", "kohad"];

let palindromes = (function (arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let reversed = arr[i].split("").reverse().join("");

    if (arr[i] === reversed) {
      result.push(arr[i]);
    }
  }

  return result;
})(names);

console.log(palindromes);

// f. Return median of two sorted arrays of the same size using IIFE function.
let array1 = [10, 30, 40];
let array2 = [50, 60, 70];

let median = (function (arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  let sortedArray = mergedArray.sort((a, b) => a - b);
  let length = sortedArray.length;

  if (length % 2 === 0) {
    let mid1 = sortedArray[length / 2 - 1];
    let mid2 = sortedArray[length / 2];
    return (mid1 + mid2) / 2;
  } else {
    return sortedArray[Math.floor(length / 2)];
  }
})(array1, array2);

console.log(median);

// g. Remove duplicates from an array using an anonymous IIFE function.
let array3 = [2, 2, 4, 5, 6, 5, 8, 4];

let uniqueArray = (function (arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
})(array3);

console.log(uniqueArray);

// h. Rotate an array by k times using an IIFE function.
let array4 = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function (arr, k) {
  let len = arr.length;
  k = k % len;

  return arr.slice(k).concat(arr.slice(0, k));
})(array4, k);

console.log(rotatedArray);
