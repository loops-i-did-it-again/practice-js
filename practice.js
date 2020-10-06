// Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
function printNumbersDivisibleByThree() {
  var index = 1;
  while (index <= 1000) {
    if (index % 3 === 0) {
      console.log(index);
    }
    index += 1;
  }
}
// printNumbersDivisibleByThree();

// Write a method that accepts an array of strings and prints out every other string.
function printEveryOtherItem(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}
// printEveryOtherItem(["a", "b", "c", "d", "e"]);

// Write a method that accepts an array of numbers and returns the sum.
function computeSum(numbers) {
  var sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
// console.log(computeSum([2, 4, 5]));

// Start with the hash: city_populations = {chi: 2700000}
// Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
// The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
var cityPopulations = { chi: 2700000 };
cityPopulations["nyc"] = 8400000;
cityPopulations.sf = 800000; // same as cityPopulations["sf"]
// console.log(cityPopulations);

// Write a method that prints out every number from 1 to 100.
function oneToAHundred() {
  var number = 0;
  while (number < 100) {
    number++;
    console.log(number);
  }
}
// oneToAHundred();

// Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
function everyOtherNumber() {
  var number = 0;
  while (number < 100) {
    if (number % 2 !== 0) {
      console.log(number);
    }
    number++;
  }
}
// everyOtherNumber();

// Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
function numberOf55s(numbers) {
  var count = 0;
  numbers.forEach(function (number) {
    if (number === 55) {
      count++;
    }
  });
  console.log(count);
}
// numberOf55s([1, 55, 2, 55, 1003, 55, 4]);

// Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string.
// For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
function awesomesauced(strings) {
  var index = 0;
  var lengthOfArray = strings.length;
  var awesomesaucedArray = [];

  while (index < lengthOfArray) {
    awesomesaucedArray.push(strings[index]);
    if (index !== lengthOfArray - 1) {
      awesomesaucedArray.push("awesomesauce");
    }
    index++;
  }
  console.log(awesomesaucedArray);
}
// awesomesauced(["a", "b", "c", "d", "e"]);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// Someone just bought two chairs. Change the hash such that the chair amount is 3.
// The final result should be: {chair: 3, table: 2}
var itemAmounts = { chair: 5, table: 2 };
// itemAmounts["chair"] -= 2;
itemAmounts.chair -= 2;
// console.log(itemAmounts);

// Start with the hash: item_amounts = {chair: 5, table: 2}
// You received 7 desks to sell. Change the hash to include desks.
// The final result should be: {chair: 5, table: 2, desk: 7}
var itemAmounts = { chair: 5, table: 2 };
// itemAmounts["desk"] = 7;
itemAmounts.desk = 7;
// console.log(itemAmounts);

// Write a method that accepts a number and returns its factorial.
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(number) {
  var product = 1;
  while (number > 1) {
    product *= number;
    number--;
  }
  console.log(product);
}
// factorial(6);

// Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array.
// For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function printSums(nums1, nums2) {
  nums1.forEach(function (num1) {
    nums2.forEach(function (num2) {
      console.log(num1 + num2);
    });
  });
}
// printSums([1, 5, 10], [100, 500, 1000]);

// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array.For example, if the input is["a", "b", "c", "d", "e", "f"], the output should be["a", "c", "e"].
function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index++;
  });
  return result;
}
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts one argument - an array of numbers.The method should return the greatest number.For example, if the input is[5, 4, 8, 1, 2], the output should be 8.
function max(numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function (number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  return currentMax;
}
// console.log(max([5, 4, 8, 1, 2]));

// # Write a method that accepts a number and returns its factorial.For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(number) {
  var result = 1;
  for (number; number > 1; number--) {
    result = result * number;
  }
  return result;
}
// console.log(factorial(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order.The method that returns a new array with the same values in descending order.However, do not use the "reverse" method built into Ruby.
function descending(numbers) {
  var result = [];
  for (var i = numbers.length - 1; i >= 0; i--) {
    result.push(numbers[i]);
  }
  return result;
}
// console.log(descending([1, 3, 5, 7]));

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array.For example, if the method receives[1, 5, 10] and[100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
function sumCombinations(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(function (number1) {
    numbers2.forEach(function (number2) {
      result.push(number1 + number2);
    });
  });
  return result;
}
// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// 1. Write a function that takes in an array of numbers and returns its sum.
function sum(numbers) {
  var result = 0;
  numbers.forEach(function (num) {
    result += num;
  });
  return result;
}
// console.log(sum([1, 2, 3]));

// 2. Write a function that takes in an array of strings and returns the smallest string.
function smallestString(strings) {
  var smallest = strings[0];
  strings.forEach(function (string) {
    if (string.length < smallest.length) {
      smallest = string;
    }
  });
  return smallest;
}
// console.log(smallestString(["apple", "banana", "orange", "kiwi"]));

// 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
// 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
function aWords(words) {
  var count = 0;
  var index = 0;
  while (index < words.length) {
    if (words[index][0] === "a") {
      count++;
    }
    index++;
  }
  return count;
}
// console.log(aWords(["apple", "banana", "apricot", "kiwi"]));

// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function frankenstring(strings) {
  var result = "";
  strings.forEach(function (string) {
    result += `${string},`;
  });
  return result.slice(0, -1);
}
// console.log(frankenstring(["apple", "banana", "apricot", "kiwi"]));

// 6. Write a function that takes in an array of numbers and returns the product of all the numbers(each number multiplied by each other).
function product(numbers) {
  var result = 1;
  numbers.forEach(function (number) {
    result *= number;
  });
  return result;
}
// console.log(product([1, 2, 4, 5]));

// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
function twoSmallest(numbers) {
  var smallestIndex = 0;
  var smallest = numbers[smallestIndex];
  var i = 0;
  while (i < numbers.length) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
      smallestIndex = i;
    }
    i++;
  }
  numbers.splice(smallestIndex, 1);
  i = 0;
  var secondSmallest = numbers[i];
  while (i < numbers.length) {
    if (numbers[i] < secondSmallest) {
      secondSmallest = numbers[i];
    }
    i++;
  }
  return [smallest, secondSmallest];
}
// console.log(twoSmallest([3, 23, 12, 10, 5, 9, 6]));

// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
function zeroCount(numbers) {
  var result = 0;
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] === 0) {
      result += 1;
    }
    index += 1;
  }
  return result;
}
// console.log(zeroCount([9, 32, 0, 2, 0, 12, 5, 2, 0, 1]));

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
function isAllBig(numbers) {
  var result = true;
  var index = 0;
  while (index < numbers.length) {
    if (numbers[index] <= 10) {
      result = false;
    }
    index += 1;
  }
  return result;
}

// console.log(isAllBig([11, 23, 32]));

// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
function aCount(words) {
  var result = 0;
  var index = 0;
  while (index < words.length) {
    var word = words[index];
    var index2 = 0;
    while (index2 < word.length) {
      if (word[index2] === "a") {
        result += 1;
      }
      index2 += 1;
    }
    index += 1;
  }
  return result;
}

// console.log(aCount(["apple", "orange", "grapes"]));

// # 1. Write a function that reverses a string. Don't use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

function reverseAString(string) {
  var reversedString = "";
  var index = string.length - 1;

  while (index >= 0) {
    reversedString += string[index];
    index--;
  }

  return reversedString;
}

console.log(reverseAString("motorboat") === "taobrotom");

// # 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

function countAs(string) {
  var stringArray = string.split("");
  var count = 0;

  stringArray.forEach(function (letter) {
    if (letter === "a") {
      count++;
    }
  });

  return count;
}

console.log(countAs("banana") === 3);

// # 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there's a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

function findIndex(array, target) {
  var index = 0;
  var foundIndex = null;

  array.forEach(function (element) {
    if (element === target) {
      foundIndex = index;
    }
    index++;
  });

  return foundIndex;
}

console.log(findIndex([2, 5, 7, 14, 16], 7) === 2);
console.log(findIndex([2, 5, 7, 14, 16], 12) === null);

// # 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

function addToOrderedArray(orderedArray, number) {
  // finding the correct index to place the number
  var placementIndex = 0;
  while (orderedArray[placementIndex] < number) {
    placementIndex += 1;
  }

  // moving the other elements out of the way
  var index = orderedArray.length - 1;
  while (index >= placementIndex) {
    orderedArray[index + 1] = orderedArray[index];
    index -= 1;
  }

  // placing the number at the correct index
  orderedArray[placementIndex] = number;

  return orderedArray;
}

console.log(addToOrderedArray([1, 2, 4, 12, 42], 8));

// # 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function higherOrLower(orderedArray, number) {
  var halfway_index = Math.floor(orderedArray.length / 2);
  var index = 0;
  var message = null;

  while (index < orderedArray.length) {
    var element = orderedArray[index];

    if (element === number) {
      if (index <= halfway_index) {
        message = "lower";
      } else {
        message = "higher";
      }
    }

    index += 1;
  }

  return message;
}

console.log(higherOrLower([2, 7, 14, 16, 24], 7) === "lower");
console.log(higherOrLower([2, 5, 7, 14, 16, 24], 7) === "lower");
console.log(higherOrLower([2, 7, 14, 16, 24], 16) === "higher");
console.log(higherOrLower([2, 5, 7, 14, 16, 24], 16) === "higher");
