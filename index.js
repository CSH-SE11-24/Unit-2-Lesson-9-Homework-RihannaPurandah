// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let user = prompt("Number: ")
user = parseInt(user)
// Prompt the user for another number that is bigger than the first number and cast it to a number
user = prompt("Another Number: ")
user = parseInt(user)
// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
for (let i = 0; i <= user; i++){
  console.log(i)
}






// PART 2: Averaging an array
// Create an array of numbers 
let nums =[1,4,5,2,8]
let sum = 0
// Write a for loop that calculates the sum of the elements 
for (let i = 0; i <nums.length;i++){
  sum = sum + i
  sum % nums.length
}
console.log(sum)





// Using the sum, calculate the average of all the elements (sum divided by the length of the array)


