// Write a function fetchDataWithCallback that simulates fetching
// data from an API with a delay. Implement error handling in the callback,
// where the callback can receive either a successful response or an error
// message. Test the function by simulating both success and failure scenarios.
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        callback(null, { data: "Fetched data from API" });
      } else {
        callback("Error: Failed to fetch data");
      }
    }, 2000);
  }
  
  function testFetchData() {
    fetchDataWithCallback((error, response) => {
      if (error) {
        console.error("Callback Error:", error);
      } else {
        console.log("Callback Success:", response);
      }
    });
  }
  
  testFetchData();
  