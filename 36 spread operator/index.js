// spread operator = allows an iterable such as an
// ...              array or string to be expanded
//                  in places where zero or more
//                  arguments are expected
//                  (unpacks the elements)

/*
let userName = "Siavash Ahmadi";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(...userName);

let maximum = Math.max(...numbers);
console.log(maximum);
*/

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Eugene", "Plankton"];

class1.push(...class2);

console.log(...class1)


// ------------ EXAMPLE 1 ------------
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);  //5
let minimum = Math.min(...numbers);  //1

console.log(maximum);

// ------------ EXAMPLE 2 ------------
let username = "Bro Code";
let letters = [...username];  

console.log(letters);  //["B","r","o"," ","C","o","d","e"]

// ------------ EXAMPLE 3 ------------
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
