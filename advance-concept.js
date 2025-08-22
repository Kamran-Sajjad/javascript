{
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
}

{
  console.log("----------------Promise Practice Question--------------");
  const myPromise = new Promise((resolve, reject) => {
    console.log("Promise started...");

    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Promise resolved: Data fetched successfully!");
      } else {
        reject("Promise rejected: Something went wrong!");
      }
    }, 2000);
  });

  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Promise completed (resolved or rejected).");
    });
  console.log("Promise completed .");
}

{
  async function callApi(api, success) {
    const response = await fetch(api);
    const data = await response.json();
    console.log("----------Users fetched successfully---------", data.users[0]);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error: Failed to fetch data.");
        }
      }, 2000);
    });
  }

  async function fetchData(api) {
    try {
      console.log("Requesting data...");
      const result = await callApi(api, true);
      console.log("result is: ", result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Request completed (success or error).");
    }
  }
  const api = "https://dummyjson.com/users";
  fetchData(api);
}
