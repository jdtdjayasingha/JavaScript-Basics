// Define a function
function hello() {
    console.log("Hello");
}

// Define a function with parameters
function helloForStudent(name) {
    console.log("Hello " + name);
    console.log(`Hello ${name}`);
}

// Create a function that returns the sum of 2 numbers
function add(a, b) {
    return a + b;
}

// Create a function that calculates the area of a circle
function areaOfCircle(Pi, radius) {
    area = Pi * radius * radius;
    return area;
}




// Call the function
hello();
helloForStudent("Tharaka");

let sum = add(5, 10);
console.log(sum);
console.log(add(5, 10));

console.log(areaOfCircle(3.14, 10));

