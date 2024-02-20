// What are array in Js ?
// Ans: An array is non primitive(i.e mutable) data type that allow you to store multiple value in a single variable .

const arr = ["aman", "anit", "vijay"];

console.log(arr);

//How to get add and remove element from array ?
//Ans.indexOf() method gets the index of a specified elements in an array

const arr1 = [1, 2, 3, 4, 5, 6];
//What is is the indexOf() method in an array ?
const a = arr1.indexOf(3);
console.log(a);

//filter, map, reduce..

//filter() method get an array of elements that satisfied a condition..

const filterarr = arr1.filter((ele) => ele > 3);
console.log(filterarr);
//

//map method: The map() method is used when you want to modify each element of an array and creat a new arry..

const mapArr = arr1.map((ele) => ele > 3);
console.log(mapArr);
console.log(arr1);

//reduce method :The reduce() method returns a single value: the function's accumulated result.

const reduceArr = arr1.reduce((acc, ele) => {
  return (acc += ele);
}, 0);
console.log(reduceArr);

//for adding : push(), concat()
// push(): will modify the original array
//concat(): will create a new array.
let array1 = [3, 4, 5, 6, 7, 8];
// array1.push(5, 6);
//3,4,5,6

console.log(array1);

let array3 = array1.concat(7, 8);
console.log(array3);
console.log(array1);

//Remove:    pop(), shift(), slice()
//pop(): will remove the last element of an array;
//shift(): will remove the first element of an array;

const poparr = array1.pop();
console.log(poparr);
console.log(array1);
const shiftArr = array1.shift();
console.log(shiftArr);
console.log(array1);

//slice() method get a subset of the array from start index to end index(not included)

let ar = [10, 11, 12, 13, 14];
// 0 -> 10
// 1 ->11
// 2 -> 12
// 3 -> 13
// 4 -> 14
let slicearr = ar.slice(0, ar.length);
console.log(slicearr);

//splice: is used to add,remove, or replace element from an array

//array.splice(startIndex,deletecount, ... items to add)

let letters = ["a", "b", "c"];
//add 'x' and 'y' at index 1
letters.splice(1, 0, "x", "y");
console.log(letters);
//remove 1 element starting from index 1
letters.splice(1, 1);
console.log(letters);
//replace the element at index 2 with 'q'

letters.splice(2, 1, "q");
console.log(letters);
