// Prints Hello world
console.log("Hello, World!");

let myNumber = 4;
let myString = "Variables are great";
let myBoolean = false;

// console.log(myNumber);

// console.log(myString);

// console.log(myBoolean);

let test = {
  myNumber: 4,
  myBoolean: false,
  myString: "Variables are great",
};

// console.log(test.myString)

let myArray = [1, "Sing", true];
myArray[0] = "Bloddy hell";
// console.log(myArray[0]);

let sameArray = new Array(1, "sing", true);
sameArray[3] = "gold";

// To check the number of items in an array
// console.log(sameArray.length);
// console.log(sameArray[3]);

// let myCall = [];
// myCall[10] = false;
// console.log(myCall[10]);
// console.log(myCall.length);

// Create a Multi-Dimensional Area of three steps
//What this means is that yoou should create an array, then inside of the array create another array and another array inside of it.

let call = [[[]]];

let multi$1 = [
  1,
  test,
  [
    "hello",
    2,
    false,
    [1, 2, ["longs", [false]], { favColors: [1, 3, ["print me"]] }],
  ],
  null,
  "come",
];

// console.log(multi$1[2][3][3].favColors[2][0]);

let complexArray = [
  42,
  "example",
  [
    true,
    false,
    [null, "deep", ["even deeper", [undefined, { key: ["find me"] }]]],
  ],
  {
    data: [
      "start",
      {
        nested: [
          "keep going",
          { final: ["almost", { target: "you got it!" }] },
        ],
      },
    ],
  },
  [
    [
      [
        "very",
        [
          "deep",
          [3.14, ["levels", { mystery: ["last", ["hidden", ["treasure"]]] }]],
        ],
      ],
    ],
  ],
];

// console.log(complexArray[4][0][0][1][1][1][1].mystery[1][1][0]);
// console.log(complexArray[3].data[1].nested[1].final[1].target);

let simpArray = [];
// console.log(simpArray);

//OBJECT is a non-primitive or complex datatype there're of two types, Object literals and Arrays
// Array is a list of items also known as members, It's syntax for creation is the squre bracket "[]"

let todo$ = ["Buy Clothes", "Get a haircut", "Shower", 4, 5, 6, 7, "Bathe"];
let babe = todo$.slice(2, -3);
// console.log(babe)

let todo$1 = new Array("Buy Laptop", 13, false);

let todo$2 = "clean, eat, run".split(" ");

// console.log(todo$2)

let firsttodo = todo$[0];
// console.log(firsttodo);

let arr1 = [1, 3, 5, 7, 9, 11, 13];
// arr1.push("goat")

let firstItem = arr1[0];
let secondItem = arr1[1];
let thirdItem = arr1[2];
let fourthItem = arr1[3];
let fifthItem = arr1[4];
let sixthItem = arr1[5];
let seventhItem = arr1[6];

// console.log(
//   firstItem,
//   secondItem,
//   thirdItem,
//   fourthItem,
//   fifthItem,
//   sixthItem,
//   seventhItem
// );
// console.log(arr1 instanceof Array);
// console.log(arr1.length - 1);
// console.log(arr1.pop());

let stack2 = [1, 2, (3)[(1, 2, 7)]];
// console.log()

let score = 20;
let deduct = 2;
score -= deduct;
// console.log("Final value:", score);

// let a = 5;
// let b = 4;

// a+=b-c;
// a-=b*c;
// a*=b%c;=0eb0=b
// a/=b
// // a**=c
// console.log(`initial Values: a = ${a}, b = ${b}`);
// console.log(a++ * b--); //returns 20 because the increments happen after the operation
// console.log(`First operation: a = ${a}, b = ${b}`);
// console.log(a * b);
// console.log(`Second operation: a = ${a}, b = ${b}`);
// console.log(++a * --b);
// console.log(`Third operation: a = ${a}, b = ${b}`);

// Comparison Operators, and it's output is boolean

// let d = 5;
// let e = 20;
let f = 2;
let g = "5";
let h = 0;

// console.log(d===g);

let a = 10;
let b = 5;
let c = 10;
let d = 15;
let e = 11;

console.log(a++ == e);
