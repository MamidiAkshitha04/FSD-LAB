function fetchData(url) {
    return new Promise((resolve, reject) => {
      if (url.includes("error")) {
        reject("Error: Invalid URL");
      } else {
        resolve("Data fetched successfully.");
      }
    });
  }
  
  fetchData("https://example.com/data")
    .then((data) => {
      console.log(data); 
    })
    .catch((error) => {
      console.error(error);
    });
  
  fetchData("https://example.com/error")
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error); 
    });
  