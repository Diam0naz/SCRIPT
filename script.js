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

// let a = 10;
// let b = 5;
let c = 10;
let d = 15;
let e = 11;

//console.log(a++ == e);

// Manipulating Arrays
//Pushing items into an array
let myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
//console.log(myStack);

//Popping items from an array
let popped = myStack.pop();
//console.log(popped);//Result: 3
//console.log(myStack);//what myStack looks like after popping the last item  [1, 2]

//Shift and Unshift
let myQueue = [];
myQueue.unshift(1);
myQueue.unshift(2);
myQueue.unshift(3);
// console.log(myQueue);

// console.log(myQueue.shift()); //Result: 3

// console.log(myQueue.shift()); //Result: 2

// console.log(myQueue.shift()); //Result: 1

//unshift() is used to insert a variable at the beginning of an array

let myQueue1 = [];
myQueue1.unshift(1);
// console.log(myQueue1);

//Write a program that takes a number and prints the  square-root of the number
let a = 81;
let sqrt = a ** 0.5;
// console.log(sqrt);

//Write a program that takes a number and prints the square of the number
let b = 3;
let sqr = b * b;
// console.log(sqrt);

//STRING OPERATORS
//Concatenation +
// console.log("Hello" + "," + " World!");
let name = "Diamonaz";
// console.log("Good morning! " + name);
let school = "The Software Developer";
let greeting = "Good morning, " + name;
let tlgreeting = `Good moring, ${name} ${school}`;
// console.log("String Concatenation: ", greeting);
// console.log("Template Literals: ", tlgreeting);

//Less than Operator <
//first checks the length of he participating operands, secondly the ASCII values of the operands
// console.log("apples" < "banana");

let age = 40;
// console.log("5" < age);

// console.log("z" < "aaa");

//Different behaviours of operators
//minus anomaly (-)
// console.log(4 - "2"); //returns 2
// console.log("4" + "2"); //returns 42
// console.log("42" - 2);
// console.log(2 + 4 + "5");
// console.log(true === "true");
// console.log("apple" === new String("apple"));
// console.log(typeof "apple", typeof new String("apple"));

//Conditionals
//IF and ElSE
// let mark = 80;
// if (mark >= 70) {
//   let result = "A";
//   console.log(`You passed! your grade is ${result}`);
// } else {
//   let result = "D";
//   console.log(`You have failed, your grade is ${result}`);
// }

//ELSE-IF STATEMENTS
// let mark = 90;
// if (mark >= 70) {
//   let result = "A";
//   console.log(`You Aced! your grade is ${result}`);
// } else if (mark >= 60) {
//   let result = "B";
//   console.log(`You have passed! your grade is ${result}`);
// } else if (mark >= 50) {
//   let result = "C";
//   console.log(`You have passed! your grade is ${result}`);
// } else if (mark >= 40) {
//   let result = "D";
//   console.log(`You have passed! your grade is ${result}`);
// } else {
//   let result = "F";
//   console.log(`AHH NAWA FOR YOU BRUHH SEE YOUR SCORE ${result}`);
// }

let mark = 57;
let grade;

if (mark >= 70 && mark <= 100) {
  grade = "A";
} else if (mark >= 60 && mark <= 69) {
  grade = "B";
} else if (mark >= 50 && mark <= 59) {
  grade = "C";
} else if (mark >= 40 && mark <= 49) {
  grade = "D";
} else if (mark >= 0 && mark <= 39) {
  grade = "F";
} else {
  grade = "Next year it is then ;)";
}
// console.log(grade);

//Using Conditionals with string
let nAme = "DIAMONDS";

if (nAme == "DIAMONDS") {
  // console.log("Welcome back!");
} else {
  // console.log("Who are you?");
}

//SWITCH statements
let target = 100;
let game;
switch (true) {
  case target >= 70 && target <= 100:
    game = "A";
    break;
  case target >= 60 && target <= 69:
    game = "B";
    break;
  case target >= 50 && target <= 59:
    game = "C";
    break;
  case target >= 40 && target <= 49:
    game = "D";
    break;
  case target >= 30 && target <= 39:
    game = "E";
    break;
  case target >= 0 && target <= 29:
    game = "F";
    break;
  default:
    game = "Denied!";
    break;
}

//console.log(game);

//FOR LOOPS

//DESCENDING ORDERED LOOPS
for (let i = 10; i > 0; i--) {
  //console.log(i);
}

//ASCENDING ORDERED LOOPS
let evenArray = [];
for (let j = 0; j <= 10; j += 2) {
  //console.log(j);
  evenArray.push(j);
  //console.log(evenArray);
}

//WITHOUT A LOGIC THE "FOR" PROGRAM RUNS INFINITELY

//Write an program that outputs even and odd numbers in an array
//TASK

//WHILE LOOPS
let counter = 1;
while (counter <= 3) {
  //console.log("heyy!");
  counter++;
}

//TASK ONE

//We have an array of numbers
//we will iterate through the array and sum all the numbers

let array = [2, 6, 8, 9, 12, 98, 11];
let result = 0;
//An Array of 7 elements, having indexes of 0 - 6
//to print the values of the array without hardcoding the values is importance
for (
  let i = 0;
  i <= array.length - 1;
  i++ //for (let i = 0; i < array.length; i++)
) {
  //prints the index of the Array
  //console.log(i);
  //Prints the values of variables stored in the array
  //console.log(`The Value of i is ${i} and the array value is ${array[i]}`);

  //console.log(`The initial value of result is ${result}`);
  result += array[i];
  //console.log(result);

  //console.log(`The final value of result is ${result}`);
}

//TASK TWO

//Using an Interger say a whole number
// We will print all the even and odd numbers from 1 - 100

let number = 100;
let oddArr = [];
let evenArr = [];
for (let j = 1; j <= number; j++) {
  //console.log(j);

  //console.log(evenArray);
  if (j % 2 == 0) {
    //console.log(`the value ${j} is an even number`);
    evenArr.push(j);
  } else {
    //console.log(`The number ${j} is an Odd number`);
    oddArr.push(j);
  }
}
//console.log(evenArr);
//console.log(oddArr);

//Write a program that Multiplies the Array members by 3 and outputs the result in another array
let oldArr = [2, 4, 6, 8, 10, 12];
let newArr = [];
for (i = 0; i < oldArr.length; i++) {
  oldArr[i] *= 3;
  newArr.push(oldArr[i]);
  //console.log(oldArr[i] * 3);
}
//console.log(newArr);

//Make a program to calculate 10! FACTORIA
let factorial = 1;
let num = 10;
for (let i = 1; i <= num; i++) {
  factorial *= i;
  //console.log(factorial);
}
//console.log(`The factorial of ${num} is ${factorial}`);

//FIBONACCHI SEQUENCE
//FOR LOOP
let v = 20;

let fibArr = [];
for (q = 0; q < v + 1; q++) {
  if (q == 0) {
    fibArr.push(0);
  } else if (q == 1) {
    fibArr.push(1);
  } else {
    fibArr.push(fibArr[q - 1] + fibArr[q - 2]);
  }
}
//console.log(`Here's your Fibonacchi Sequence: ${fibArr}`);

//WHILE LOOP
let y = 20;
let n = 0;
let fibArr1 = [];

while (n <= y) {
  if (n == 0) {
    fibArr1.push(0);
  } else if (n == 1) {
    fibArr1.push(1);
  } else {
    fibArr1.push(fibArr1[n - 1] + fibArr1[n - 2]);
  }
  n++;
}
//console.log(`Here's your Fibonacchi Sequence: ${fibArr1}`);

//Also a Fibionacchi Sequence
let numBers = [0, 1];

let howMany = 5;

for (let i = 0; i < howMany; i++) {
  numBers.push(howMany[i] + howMany[i + 1]);
}

//FIZZBUZZ PROBLEM

//MULTIPLES OF 3 PRINT FIZZ
//MULTIPLES OF 5 PRINT BUZZ
//MULTIPLES OF 3 AND 5 PRINT FIZZBUZZ

let numbers = 100;

for (let i = 1; i <= numbers; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    //console.log(i, "FIZZ-BUZZ");
  } else if (i % 5 == 0) {
    //console.log(i, "BUZZ");
  } else if (i % 3 == 0) {
    //console.log(i, "FIZZ");
  }
}

let students = [
  "John",
  "Peter",
  "David",
  "Isaac",
  "Mustapha",
  "James",
  "Gabriel",
  "Ken",
];
let message;
for (l = 0; l < students.length; l++) {
  //console.log(`WELCOME TO BLOCKFUSE LABS, ${students[l]}`)
  if (students[l] == "Ken") {
    message = "Student Exits in the Database";
  } else {
    continue;
    console.log("Student does not exist");
  }
}
//console.log(message);

let arra = [8, 6, 2, 200, 4, 11, 16, 25, 5, 28];

let max = 0;

for (let i = 0; i < arra.length; i++) {
  if (max < arra[i]) {
    max = arra[i];
  }
  //console.log(max);
}
//console.log(max);

let scoreArry = [25, 50, 75, 85, 90, 101, -45, 99, 67, 55, 75, 200];

let results = [];

let gradIng;

for (t = 0; t < scoreArry.length; t++) {
  if (scoreArry[t] >= 90 && scoreArry[t] <= 100) {
    gradIng = "A";
    results.push(gradIng);
  } else if (scoreArry[t] >= 80 && scoreArry[t] <= 89) {
    gradIng = "B";
    results.push(gradIng);
  } else if (scoreArry[t] >= 70 && scoreArry[t] <= 79) {
    gradIng = "C";
    results.push(gradIng);
  } else if (scoreArry[t] >= 60 && scoreArry[t] <= 69) {
    gradIng = "D";
    results.push(gradIng);
  } else if (scoreArry[t] >= 0 && scoreArry[t] <= 59) {
    gradIng = "F";
    results.push(gradIng);
  } else {
    gradIng = "Next year it is then ;)";
    results.push(gradIng);
  }
  //continue;
}

//console.log(results);

//Write a number that acceps a number and generates the even and odd numbers between 1 and the number n

function evenOdd(num) {
  let evenArr = [];

  let oddArr = [];

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      evenArr.push(i);
      //return evenArr;
    } else {
      oddArr.push(i);
      //return oddArr;
    }
  }
  console.log(oddArr);
  console.log(evenArr);
}

let unKnown = 30;

//evenOdd(unKnown);

//ASSIGNING FUNCTION TO A VARIABLE
let findMax = function (arr) {
  let max = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
};

//ARROW FUNCTIONS ARE ANOTHER WAY FOR DECLARING FUNCTIONS BECAUSE OF THE " => " WRITTEN IN IT'S DECLARATION
//
// let findMax = (arr) => {
//   let max = 0;

//   for (let i = 0; i <= arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
// };

//VARIABES OUTSIDE A  FUNCTION IS A GLOBAL VARIABLE
//CAN BE ACCESSED ANYWHERE IN YOUR PROGRAM
let scope = "global SCOPE";

function localScope() {
  //CANNOT BE ACCESSED EVERYWHERE EXCEPT THE FUNCTIONS SCOPE
  let local = "local";
} // IT CAN BE CALLED LOCAL SCOPE OR FUNCTION SCOPE

//ASSIGNMENTS

//#### TASK 1
//WRITE A FUNCTION THAT IS GOING TO ACCEPT AS INPUT ANY LETTER OF THE 26 ALPHABET AND RETURN TRUE IF THE LETTER IS A VOWEL AND FALSE IF IT IS NOT A VOWEL.

function vowelSort(Alphabet) {
  let consonantLetter = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let vowelLetter = ["A", "E", "I", "O", "U"];

  for (let i = 0; i < vowelLetter.length; i++) {
    if (Alphabet == vowelLetter[i]) {
      console.log(`${Alphabet}, is a VOWEL so TRUE`);
    }
  }

  for (let i = 0; i < consonantLetter.length; i++) {
    if (Alphabet == consonantLetter[i]) {
      console.log(`${Alphabet}, is a CONSONANT so FALSE`);
    }
  }
}
//ENSURE YOU ENTER STRING DATA TYPE
//let Search = vowelSort("T");

//#### TASK 2
//WRITE A FUNCTION THAT RECIRVES AN ARRAY OF NUMBERS AS A PARAMETER AND IT SHOULD COMPUTE THE AVERAGE OF ALL THE NUMBERS IN THE ARRAY AND RETURN THE NUMBERS.
function averageArr(arr) {
  for (a = 0; a < arr.length; a++) {
    xy += arr[a];
  }

  let avg = xy / arr.length;

  console.log(avg);
}
let xy = 0;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//averageArr(arr);

//#### TASK 3
//WRITE A FUNCTION THAT CHECKS FOR THE SMALLEST NUMBER IN AN ARRAY

function minNum(arr) {
  let min = arr[0];

  for (let i = 0; i < arry1.length; i++) {
    if (min > arry1[i]) {
      min = arry1[i];
    }
  }
  console.log(min);
}
let arry1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 50, 20, 22, 24, 26, 28, 30, 2, 1];
//minNum(arry1);

//#### TASK 4
//WRITE A FUNCTION THAT RECIEVES A STRING AS AN INPUT AND RETURNS THE LETTERS THAT ARE VOWELS
function wordSearch(word) {
  let vowelLetters = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

  let newArr = [];

  let vowLetters = [];

  for (let i = 0; i < word.length; i++) {
    newArr.push(word[i]);
  }

  //console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < vowelLetters.length; j++) {
      if (newArr[i] == vowelLetters[j]) {
        vowLetters.push(newArr[i]);
      }
    }
  }
  console.log(
    `The vowels in the word are ${vowLetters.length}. The Vowels in the word ${word} are: ${vowLetters}`
  );
}

//wordSearch("CatAlOuge");

//NESTED LOOPS
function repeat(b) {
  for (let i = 1; i <= 2; i++) {
    
    for (let j = 0; j <= 2; j++) {
      console.log("outer", i);
      console.log("Let's go to the bahamas", j);
    }
  }
}

repeat(b)

//ARRAY METHODS
function checkVowel(str) {
  let vowel = "aeiou";
  let result = [];

  let formattedString = str.toLowerCase();

  for (char in vowel) {
    if (vowel.includes(formattedString[char])) {
      result.push(formattedString[char]);
    }
  }
  console.log(result);
}

checkVowel("Wellcome");

//## MINI PROJECT: STIDENT DATABASE CHECKER
//let studentDB = [
/*  {
    name: "JEMMA",
    age: 30,
    gender: "F",
    course: "MEDICAL SCIENCES",
  },
  {
    name: "RAYMOND",
    age: 26,
    gender: "M",
    course: "PSYCHOLOGY",
  },
  {
    name: "URIEL",
    age: 24,
    gender: "M",
    course: "MEDICAL SCIENCES",
  },
  {
    name: "NATHAN",
    age: 22,
    gender: "M",
    course: "PSYCHOLOGY",
  },
  {
    name: "RICHARD",
    age: 29,
    gender: "M",
    course: "PSYCHOLOGY",
  },
  {
    name: "HAUWA",
    age: 22,
    gender: "F",
    course: "MEDICAL SCIENCES",
  },
  {
    name: "BLESSING",
    age: 19,
    gender: "F",
    course: "PSYCHOLOGY",
  },
  {
    name: "ZUWAIRA",
    age: 31,
    gender: "F",
    course: "PSYCHOLOGY",
  },
  {
    name: "DEBBY",
    age: 20,
    gender: "F",
    course: "PSYCHOLOGY",
  },
  {
    name: "MICHEAL",
    age: 19,
    gender: "M",
    course: "MEDICAL SCIENCES",
  },
];*/
/*
let medicalSciences = [];
let psychology = [];

function allocateDepartment(arr) {
  for (let student in studentDB) {
    if (studentDB[student].course === "MEDICAL SCIENCES") {
      medicalSciences.push(studentDB[student]);
    } else if (studentDB[student].course === "PSYCHOLOGY") {
      psychology.push(studentDB[student]);
    }
  }

  console.log(
    "These are the students in the DEPARTMENT OF  MEDICINE",
    medicalSciences
  );
  console.log(
    "These are the students in the DEPARTMENT OF  PSYCHOLOGY",
    psychology
  );
}
*/
//allocateDepartment(studentDB);

let studentDB = [
  {
    name: "VICTOR",
    age: "24",
    gender: "M",
    course: "AGRICULTUE",
    stateOfOrigin: "IMO",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "MARY",
    age: "26",
    gender: "F",
    course: "MEDICAL SCIENCES",
    stateOfOrigin: "KOGI",
    gradIng: "SECONDCLASS UPPER",
  },
  {
    name: "JOHN",
    age: "25",
    gender: "M",
    course: "PSYCHOLOGY",
    stateOfOrigin: "KWARA",
    gradIng: "SECONDCLASS LOWER",
  },
  {
    name: "PETER",
    age: "21",
    gender: "M",
    course: "LAW",
    stateOfOrigin: "LAGOS",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "PRISCILLA",
    age: "24",
    gender: "F",
    course: "ENGINEERING",
    stateOfOrigin: "GOMBE",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "JEROME",
    age: "23",
    gender: "M",
    course: "AGRICULTURE",
    stateOfOrigin: "ENUGU",
    gradIng: "SECONDCLASS LOWER",
  },
  {
    name: "GOODNESS",
    age: "22",
    gender: "F",
    course: "MEDICAL SCIENCES",
    stateOfOrigin: "KANO",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "FATIMA",
    age: "26",
    gender: "F",
    course: "PSYCHOLOGY",
    stateOfOrigin: "SOKOTO",
    gradIng: "SECONDCLASS UPPER",
  },
  {
    name: "MUSA",
    age: "32",
    gender: "M",
    course: "LAW",
    stateOfOrigin: "GOMBE",
    gradIng: "THIRDCLASS",
  },
  {
    name: "JONAH",
    age: "26",
    gender: "M",
    course: "ENGINEERING",
    stateOfOrigin: "AKWA IBOM",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "LUKE",
    age: "25",
    gender: "M",
    course: "ENGINEERING",
    stateOfOrigin: "KANO",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "TIMOTHY",
    age: "20",
    gender: "M",
    course: "LAW",
    stateOfOrigin: "OSUN",
    gradIng: "SECONDCLASS LOWER",
  },
  {
    name: "DANIEL",
    age: "27",
    gender: "M",
    course: "PSYCHOLOGY",
    stateOfOrigin: "KOGI",
    gradIng: "SECONDCLASS UPPER",
  },
  {
    name: "HAUWA",
    age: "23",
    gender: "F",
    course: "AGRICULTURE",
    stateOfOrigin: "TARABA",
    gradIng: "SECONDCLASS UPPER",
  },
  {
    name: "JOHNSON",
    age: "22",
    gender: "M",
    course: "MEDICAL SCIENCES",
    stateOfOrigin: "KOGI",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "CHRISTABEL",
    age: "27",
    gender: "F",
    course: "AGRICULTURE",
    stateOfOrigin: "TARABA",
    gradIng: "SECONDCLASS LOWER",
  },
  {
    name: "AIYESHA",
    age: "23",
    gender: "F",
    course: "MEDICAL SCIENCES",
    stateOfOrigin: "LAGOS",
    gradIng: "SECONDCLASS UPPER",
  },
  {
    name: "NATASHA",
    age: "21",
    gender: "F",
    course: "PSYCHOLOGY",
    stateOfOrigin: "GOMBE",
    gradIng: "THIRDLASS",
  },
  {
    name: "NAOMI",
    age: "26",
    gender: "F",
    course: "LAW",
    stateOfOrigin: "KANO",
    gradIng: "FIRSTCLASS",
  },
  {
    name: "ELIZABETH",
    age: "21",
    gender: "F",
    course: "ENGINEERING",
    stateOfOrigin: "KOGI",
    gradIng: "FIRSTCLASS",
  },
];

//BE ABLE TO GET THE TOTAL NUMBER OF STUDENTS OFFERING THE DIFFERENT COURSES
//SEARCH THE NAME OF A STUDENT TO RETURN THE CORRESPONDING DEPARTMENTS
//TOTAL NUMBER OF MALES
//TOTAL NUMBER OF FEMALES
//CALCULATE THE TOTAL NUMBER OF STUDENTS
//RETURN STATE OF ORIGIN FOR EACH STUDENT
//RETURN TOTAL NUMBER OF STUDENTS THAT SHARE SAME STATE OF ORIGIN

let medicalSciences = [];
let agriculture = [];
let engineering = [];
let law = [];
let psychology = [];

let zz = studentDB;

function numberDept(arr) {
  for (let i in studentDB) {
    if (studentDB[i].course === "AGRICULTURE") {
      agriculture.push(studentDB[i]);
    } else if (studentDB[i] === "MEDICAL SCIENCES") {
      medicalSciences.push(studentDB[i]);
    } else if (studentDB[i] === "PSYCHOLOGY") {
      psychology.push(studentDB[i]);
    } else if (studentDB[i] === "LAW") {
      law.push(studentDB[i]);
    }
  }
  console.log(agriculture);
}



//search for name
//log out department for name


function searchName(name) {

 name = name.toUpperCase();

  let search = studentDB.find((student) => student.name === name);
  console.log(search);
  if (search) {
    console.log(
      `The student ${search.name} is in the ${search.course} department`
    );
  } else {
    console.log("Student not found");
  }
}


//numberDept(zz);

searchName("jonah");


// let ab = 3
// let bc = 4


// let fg = ab + bc

function add(a, b) {
  a + b;
  result = a + b;
  console.log(result)
}

//add(3, 4)
//add(5, 7)