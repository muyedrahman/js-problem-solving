// 1. Count Vowels
// Output: 3
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Programming"));

// 2. Remove Duplicate Numbers
// Method 1 (Set)
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
//  Method 2 (Loop)
function removeDuplicates(arr) {
  const result = [];

  for (const num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

// 3. Find Second Largest Number
 
function secondLargest(arr) {
  const unique = [...new Set(arr)].sort((a, b) => b - a);
  return unique[1];
}

console.log(secondLargest([10, 5, 8, 20, 15]));


// 4. Check Palindrome
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));

// 5. Reverse String
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));
 
 
// 6. Sum of Array
function sumArray(arr) {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumArray([10, 20, 30, 40])); // Add Sum of Array solution

