// a. Print odd numbers in an array using an anonymous function.
let num = [10, 100, 7, 35, 59, 3, 1, 9, 5];

let oddNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

oddNumbers(num);

// b. Convert all the strings to title caps in a string array using an anonymous function.
let array = ["hari", "karan"];

let titleCaps = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase(); // Convert to title case
  }
};

titleCaps(array);
console.log(array);

// c. Sum of all the numbers in an array using an anonymous function.
let numbers = [1, 2, 3, 4, 5];

let sum = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

console.log(sum(numbers));

// d. Return all the prime numbers in an array using an anonymous function.
let numbers2 = [41, 7, 3, 10, 8, 15, 5, 2, 11]; // Renamed to numbers2 to avoid variable redeclaration

let findPrimes = function (arr) {
  let primes = [];

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
      primes.push(arr[i]);
    }
  }

  return primes;
};

console.log(findPrimes(numbers2));

// e. Return all the palindromes in an array using an anonymous function.
let names = ["level", "shweta", "racecar", "mummy", "papa", "kohad"];

let findPalindromes = function (arr) {
  let palindromes = [];

  for (let i = 0; i < arr.length; i++) {
    let reversed = arr[i].split("").reverse().join("");

    if (arr[i] === reversed) {
      palindromes.push(arr[i]);
    }
  }

  return palindromes;
};

console.log(findPalindromes(names));

// f. Return median of two sorted arrays of the same size using an anonymous function.
let array1 = [10, 30, 40];
let array2 = [50, 60, 70];

let findMedian = function (arr1, arr2) {
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
};

console.log(findMedian(array1, array2));

// g. Remove duplicates from an array using an anonymous function.
let array3 = [2, 2, 4, 5, 6, 5, 8, 4];

let removeDuplicates = function (arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

console.log(removeDuplicates(array3));

// h. Rotate an array by k times using an anonymous function.
let array4 = [1, 2, 3, 4, 5];
let k = 2;

let rotate = function (arr, k) {
  let len = arr.length;
  k = k % len;

  let rotatedArray = arr.slice(k).concat(arr.slice(0, k));
  return rotatedArray;
};

console.log(rotate(array4, k));
