function sayHi() {
    console.log("hi");
}
sayHi();
sayHi(); 

function sayHelloAndBye() {
    console.log("hello");
    console.log("bye");
}

sayHelloAndBye(); // Output: hello, bye

function sum(a, b) {
    console.log(a + b);
}

sum(1, 2); // Output: 3

function sumAndReturn(a, b) {
    return a + b;
}

let result = sumAndReturn(1, 2);
console.log(result); // Output: 3

function logArguments(a, b) {
    console.log(a, b);
}

logArguments(1); // Output: 1, undefined
logArguments();  // Output: undefined, undefined

function sumWithReturn(a, b) {
    return a + b;
    console.log("This will never run");
}

console.log(sumWithReturn(1, 2)); // Output: 3
console.log("This is a function call"); // Output: This is a function call

