// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// 2 Steps:
//    1 - Declaration (var, let, const)
//    2 - Assignment ( = is the assignment operator)

let firstName = "Swishvash";  // Strings
let age = 24;  // Numbers
let student = false; // Booleans

age = age + 69;

console.log("Hello", firstName);
console.log("You are", age);
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old!";
document.getElementById("p3").innerHTML = "Enrolled: " + firstName;

============================================
// variable scope = where a variable is recognized
// and accessible (local vs global)            

let x = 3; // global scope

function1();

function function1(){
    let x = 1; // local scope
    console.log(x);
}

function function2(){
    let x = 2; // local scope
    console.log(x);
}
