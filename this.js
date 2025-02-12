///implicit binding

var sakib = {
  name: "sakib",
  age: 20,
  printName: function () {
    console.log(this.name);
  },
};

sakib.printName();

///explicit binding
var printNameFunction = function (obj) {
  obj.printName = function () {
    console.log(this.name);
  };
};

var tamim = {
  name: "tamim",
  age: 20,
};
var mush = {
  name: "mush",
  age: 30,
};

printNameFunction(mush);
printNameFunction(tamim);

tamim.printName();
mush.printName();

// another approach of explicit binding
var person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr. Y",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

var mashrafee = person("mashrafee", 30);
mashrafee.printName();
mashrafee.father.printName();

/// new binding
function player(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`);
}

var mushi = new player("mushi", 45);

/// window binding
// ("use strict");

var printPlayerName = function () {
  console.log(window === this); // true , here this pointing to the window
  console.log(this.name); // undefined
};

var tamima = {
  name: "tamima",
};
printPlayerName();
