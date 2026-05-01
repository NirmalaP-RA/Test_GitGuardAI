// 🚩 TEST 4: Array Index Out of Bounds
function processData(items) {
  for (let i = 0; i <= items.length; i++) { 
    console.log("Processing:", items[i].name);
  }
}

module.exports = { processData };