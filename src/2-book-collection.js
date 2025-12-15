const bookInventory = {
  "The Bluest Eye": 3,
  "Beloved": 5,
  "Homegoing": 2,
  "The Vanishing Half": 4,
  "Between the World and Me": 1
};
 
// Part A: Use Object.keys() and a for loop to print each book and its availability in this format:
// "The Bluest Eye: 3 copies available"
// "Beloved: 5 copies available"
// etc...
const keys = Object.keys(bookInventory)
// returns array of keys
for(let i = 0; i < keys.length; i++){
const key = keys[i]; 
const value = bookInventory[key]
console.log(`${key}: ${value} copies available`);
}
// Part B: Calculate and log the total number of books across all titles (should be 15)
// Hint: You'll need a variable to keep track of the running total as you loop through the keys
const totalBooks = () => {
  let runningTotal = 0;
  for(const keys in bookInventory){ // using a for in loop, for in loops iterates through properties in an object
    const value = bookInventory[keys] // used to access the value of each iterating key
    runningTotal += value // add the value to the running total variable; because you want to add the value to something 
  }
  return runningTotal;
}
console.log(totalBooks())