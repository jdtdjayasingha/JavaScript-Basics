// Normal function
function hello() {
    console.log("Hello");
}
function add1(a, b) {
    return a + b;
}
const add2 = function(a, b){
    return a + b;
}

// Arrow function
helloArrow1 = () => {
    console.log("Hello");
}
helloArrow2 = () => console.log("Hello");

const addArrow1 = (a, b) => {
    return a + b;
}
const addArrow2 = (a, b) => a + b;
const singleArrow = a => a + 5;


// Call the function
helloArrow();