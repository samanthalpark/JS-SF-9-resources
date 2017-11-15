/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */
let q1 = ['image1.png', 'image2.png', 'image3.png'];
console.log("Question 1: " + q1);

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */
let q2 = q1[0]
console.log("Question 2: " + q2);

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */
let q3 = q1.length
console.log("Question 3: " + q3);

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */
let q4 = q1[q1.length-1];
console.log("Question 4: " + q4);


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a map function to increase each value by 1, storing the result
 * in a new array. The end result should be a second array of numbers 
 * with the values 2, 3, 4, and 5.
 */

// Your code here

let q5 = [1,2,3,4].map(function(element) {
	return element + 1;
});
console.log("Question 5: " + q5);

/**
 * Question 6
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a forEach function to increase each value by 1, storing the result
 * in the same array you just created. This should result in the original
 * array you created storing the values 2, 3, 4, and 5.
 */

// Your code here

// forEach function
let q5 = [1,2,3,4];
q5.forEach(function(element, index){
	q5[index] = element + 1;
});
console.log("Question 5: " + q5);

// or written as a for loop
// let q5 = [1,2,3,4];
// for (let i = 0; i < q5.length; i++) {
// 	q5[i]++;
// }
// console.log("Question 5: " + q5);

/**
 * Question 7
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q7.
 */
let q7 = 0;
q7.forEach(function(element){
	q7 += element;
});
q7 = q7 / q5.length;
console.log("Question 7: " + q7);

