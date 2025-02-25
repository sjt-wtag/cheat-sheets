const getPromise = () => {
    return new Promise((resolve, reject) => {
      console.log("I am a promise");
      // resolve("success");
      reject("error occured");
    });
  };
  
  let promise = getPromise();
  
  promise.then((res) => {
    console.log("promise fulfilled", res);
  });
  
  promise.catch((err) => {
    console.log("rejected", err);
  });
  
  //promise chaining
  
  function asyncFunc1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data1");
        resolve("success");
      }, 2000);
    });
  }
  
  function asyncFunc2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data2");
        resolve("success");
      }, 4000);
    });
  }
  
  console.log("fetching data1...");
  asyncFunc1().then((res) => {
    console.log("fetching data2...");
    asyncFunc2().then((res) => {});
  });
  
  // another example of promise chaining
  function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("show the dataaa", dataId);
        resolve("success");
      }, 8000);
    });
  }
  
  getData(1)
    .then((res) => {
      return getData(2);
    })
    .then((res) => {
      return getData(3);
    })
    .then((res) => {
      console.log(res);
    });