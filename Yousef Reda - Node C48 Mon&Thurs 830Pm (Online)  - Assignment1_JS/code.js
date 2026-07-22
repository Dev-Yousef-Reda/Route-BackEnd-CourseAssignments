// A
// 1 )
// let x = '123'

// let y = Number(x) + 7

// console.log(y);

/* ---------------------------------------------------------------- */

// 2)
// let value = ''

// let result = value ? 'invalid' : 'valid'

// console.log(result);

/* ---------------------------------------------------------------- */

// 3)
// for (let i = 1; i <= 10; i++) {

//     if (i % 2 === 0)
//         continue;

//     console.log(i);
// }

/* ---------------------------------------------------------------- */

// 4)
// let numbers = [1, 2, 3, 4, 5, 6]

// let evenNumbers = numbers.filter((num) => num % 2 === 0)

// console.log(evenNumbers);

/* ---------------------------------------------------------------- */

// 5)
// let arr1 = [1,2,3]
// let arr2 = [4, 5, 6]
// let allArrays = [...arr1, ...arr2]
// console.log(allArrays);

/* ---------------------------------------------------------------- */

// 6)
// let dayNum = 6
// let day = ''
// switch (dayNum) {
//     case 1:
//         day = 'saturday'
//         break;
//     case 2:
//         day = 'sunday'
//         break;
//     case 3:
//         day = 'monday'
//         break;
//     case 4:
//         day = 'tuesday'
//         break;
//     case 5:
//         day = 'wednesday'
//         break;
//     case 6:
//         day = 'thursday'
//         break;
//     case 7:
//         day = 'friday'
//         break;
//     default:
//         console.log('wrong day number, please enter number from 1-7');
//         break;
// }
// console.log(day);

/* ---------------------------------------------------------------- */

// 7)
// let arr = ['a', 'bc4', 's23fcc', 'asfed']

// let valuesLengthArr = arr.map((value) => value.length)

// console.log(valuesLengthArr);

/* ---------------------------------------------------------------- */

// 8)
// function checkForNumberDivisible(numToTest, num1, num2) {
//     if (numToTest % num1 === 0 && numToTest % num2 === 0) {
//         return ('Divisible by both');
//     }
//     return ('Not Divisible by both');
// }
// let result = checkForNumberDivisible(15, 3, 5)

// console.log(result);

/* ---------------------------------------------------------------- */

// 9)
// const calculateResult = (number, power) => number ** power

// console.log(calculateResult(2, 2));
/* ---------------------------------------------------------------- */

// 10 )
// function extractData(data) {
//     const { name, age } = data
//     return `${name} is ${age} years old`
// }
// let data = { name: 'John', age: 25 }
// console.log(extractData(data));
/* ---------------------------------------------------------------- */

// 11)
// function calculateSum(...nums) {
//     let result = nums.reduce((accumulator, element) => accumulator + element)
//     return result
// }

// console.log(calculateSum(1, 2, 3, 4));
/* ---------------------------------------------------------------- */

// 12)
// function fetchData() {
//     return new Promise((resolved) => {
//         setTimeout(() => {
//             resolved('Success')
//         }, 1000 * 3)
//     })
// }

// fetchData()
//     .then((result) => {
//         console.log(result);
//     }
//     )
/* ---------------------------------------------------------------- */

// 13)

// function findLargestNumber(arr) {
//     let largestNum = arr[0]
//     arr.forEach(element => {
//         if (element > largestNum)
//             largestNum = element
//     });
//     return largestNum
// }

// let arr = [5, 100, 6, 155]

// console.log(findLargestNumber(arr));

/* ---------------------------------------------------------------- */

// 14)
// function getObjectKeys(obj = {}) {
//     let arrOfKeys = []
//     for (const key in obj) {
//         arrOfKeys.push(key)
//     }
//     return arrOfKeys
// }
// const keys = getObjectKeys({ name: 'Yousef', age: 25, isMarried: false })

// console.log(keys);
/* ---------------------------------------------------------------- */
// 15)

// function splitText(txt, Separator = " ") {
//     let words = txt.split(Separator)
//     return words
// }

// console.log(splitText("hello nice to meet you", " "));
/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */

// B

// 1)

/*
                foreach                                  |     for...of 
    -----------------------------------------------------------------------------------------

    - used with arrays only                              | - used with iterable 

    - can't use continue / break                         | - can use continue / break

    - array method (high order function)                 | - Loop statement  

*/

/* ---------------------------------------------------------------- */

// 2)

/*
    Hoisting : During the compilation phase ,
    JavaScript moves all var declarations and function declarations 
    to the top of their containing scope. 
*/
// sayHi()
// function sayHi() {
//     console.log('hi');
// }
// console.log(x);
// var x = 5

/*
    Temporal Dead Zone is the time period between when a let, const
    variable is hoisted and when it is actually initialized with its value.
*/

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 2;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 3;
/* ---------------------------------------------------------------- */

// 3)

/*
    == is abstract / Loose  equality used to compare values
    === is strict equality used to compare values and types 
*/
/* ---------------------------------------------------------------- */

// 4)
/*
    try - catch : is used when there is a doubt that an error might happen at certain part of code
    so in order to prevent error from stopping the programme try- catch is used 
*/
// async function getData() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products')

//         if (response.status !== 200)
//             throw new Error(' msa2 el 5er, this is error :(')

//         const result = await response.json()

//         console.log(result);

//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getData()
/* ---------------------------------------------------------------- */
// 5 )

/* 
    comparison I made between type conversion and type coercion:
    https://www.notion.so/Type-coercion-Type-conversion-2bbff6ba885780a68a16f0b05feb76b7?source=copy_link
*/

/* ---------------------------------------------------------------- */
/* ---------------------------------------------------------------- */



