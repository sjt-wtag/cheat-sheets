// closure
var num1 = 2;

var sum = function () {
  var num2 = 3;
  var num = 6;

  return function () {
    return num1 + num2; // this will be closure as num2 is called
  };
};

var myFunc = sum();
console.dir(myFunc);

// not closure
var num1 = 2;
var num3 = 9;

var sum = function () {
  var num2 = 3;
  var num = 6;

  return function () {
    return num1 + num3;
  };
};

var myFunc = sum();
console.dir(myFunc);
