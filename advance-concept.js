function processData(data, callback) {
  console.log("Processing data...");
  setTimeout(() => {
    const processedResult = data.toUpperCase();
    callback(processedResult);
  }, 1000);
}

function displayResult(result) {
  console.log("Processed result:", result);
}

processData("hello world", displayResult);

console.log("Operation initiated, waiting for result...");
