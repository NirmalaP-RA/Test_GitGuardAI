// index.js
const app = require('./app'); // Imports your Express app with SQLi and Secrets
const { processData } = require('./utils'); // Imports your Out of Bounds loop

// 🚩 TEST 5: Dangerous Eval (Another common security flaw)
const userInput = "console.log('Malicious code executed!')";
eval(userInput); 

// Mock data for the Array Index Out of Bounds test
const mockItems = [
    { name: "Product A" },
    { name: "Product B" }
];

console.log("--- Starting GitGuardAI Test Suite ---");

try {
    console.log("Testing Utility Module...");
    processData(mockItems); 
} catch (err) {
    console.error("Caught expected crash in processData:", err.message);
}

// The server from app.js will now start because it was required above
console.log("App module loaded. Server should be listening on port 3000...");