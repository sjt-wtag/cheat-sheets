// synchronous callback
function sum(a, b) {
    console.log(a + b);
  }
  
  function calculator(a, b, sumCallback) {
    sumCallback(a, b);
  }
  calculator(2, 5, sum);
  calculator(3, 1, sum);
  
  // asynchronous callback
  
  console.log("one");
  
  const hello = () => {
    console.log("hello");
  };
  
  setTimeout(hello, 1000);
  console.log("two");
  
  // 1, 2, 3 will be printed at the same time
  
  function getData(dataId) {
    setTimeout(() => {
      console.log(dataId);
    }, 2000);
  }
  
  getData('a');
  getData('b');
  getData('c');
  
  // 1, 2, 3 will be printed at different time
  
  function getData(dataId, getNextData) {
    setTimeout(() => {
      console.log("data", dataId);
      if(getNextData){
        getNextData();
      }
    }, 4000);
  }
  
  getData(1, ()=> { // callback hell
    console.log("getting data2...");
    getData(2, ()=>{
      console.log("getting data3...");
      getData(3, ()=>{
        console.log("getting data4...");
        getData(4);
      })
    })
  })