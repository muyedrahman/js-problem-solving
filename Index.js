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