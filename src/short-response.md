# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

Part A: The console will log 15. This happens because objects in JavaScript are assigned by reference, so playlist2 points to the same object in memory as playlist1. When playlist2.songCount is updated, it mutates the shared object, affecting playlist1.songCount as well.

Part B:To prevent this, you must create a shallow copy of the object so that playlist2 references a different object in memory. This can be done using the spread operator.

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true },
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. filter —> This method is used to return a new array containing only students whose grade is above 85.
2. find —> This method locates the student object with the name "Destiny", allowing you to directly update their grade property.
3. reduce —> This method aggregates all student grades into a single total, which can then be divided to compute the average.
4. map —> This method transforms each student object into a formatted string like "Maya: 92".

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ["a", "b", "c", "d"];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

The error occurs because capitalize() is being invoked immediately, instead of being passed as a callback function to map. Since no argument is provided when capitalize() is called, str is undefined, and calling .toUpperCase() on undefined throws a TypeError.

You should pass the function reference to map, allowing map to call it for each element in the array.

---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 },
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
  - What is the value of sum?
  - What is the value of order?
  - What gets returned?

### Response 4

Part A: grandTotal will equal 135, which is the sum of all total values in the orders array (45 + 23 + 67).

Part B: The 0 is the initial accumulator value for sum. It ensures that the reduction starts from a known number and prevents unexpected behavior, especially if the array is empty or contains non-numeric values.

Part C: sum starts at 0 because it is the initial value passed to reduce.
order is the first object in the array: { id: 1, total: 45 }.
The callback returns 45, which becomes the new value of sum for the next iteration.
