// function = Define code once, Use it many times
//          
//   To perform some code, call the function name

startProgram();

function startProgram() {
    let userName = "Siavash Ahmadi";
    let age = 24;

    happyBirthday(userName, age);
}

function happyBirthday(a, b) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you!");
    console.log("You are", b, "years old!");
}

==========================================

// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){

    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(happyBirthday("BroCode", 25));
console.log(isValidEmail("Bro@fake.com"));
