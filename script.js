// Part 2: Functions with parameters, return values, and scope

// Global variable
let multiplier = 5;

// Function with parameter & return value
function multiplyNumber(num) {
    return num * multiplier; // using global + parameter
}

// Function to demonstrate local scope
function localScopeExample() {
    let localVar = 10; // only accessible inside this function
    return localVar + 5;
}

// Display calculation result
function showCalculation() {
    let result1 = multiplyNumber(4);
    let result2 = localScopeExample();
    document.getElementById("functionResult").innerText =
        `multiplyNumber(4) = ${result1}, localScopeExample() = ${result2}`;
}

// Part 3: JS triggers CSS animation
document.getElementById("animateBoxBtn").addEventListener("click", function() {
    const box = document.getElementById("jsBox");
    box.classList.toggle("animate"); // toggle animation class
});
