
 function hasTargetSum(array, target) {
  const seenNumbers = new Set(); 
  for (const number of array) {
    const complement = target - number;

   
    if (seenNumbers.has(complement)) return true;

    
    seenNumbers.add(number);
  }
  return false;

}

/* Big O notation:
 Time complexity: O(n)
Space complexity: O(n)
*/

/* pseudocode:
 create an object to keep track of all the numbers we've seen
iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  check if any of the keys in our object is the complement to the current number
    if so, return true
  save the current number as the key on our object so we can check it later against other numbers
if we reach the end of the array, return false
*/

/*
  written explanation:
  Initialize an empty Set called seenNumbers.

Iterate through each number in the array.

Calculate the complement by subtracting the current number from the target.

Check if the complement exists in seenNumbers. If found, return true.

Add the current number to seenNumbers for future reference.

If no pair is found, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
