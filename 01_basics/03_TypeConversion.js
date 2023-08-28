let score = "32"

//console.log(typeof score);

// Now if we want to perform operation on the above value as a number and not string then in that case we need to use TypeConversion
//So we have to convert a value into specific type: the desired data-type starting letter is uppercase (here Number) 
let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);

//Case:
score1 = "32asd"
//console.log(typeof score1);

let value1 = Number(score1);
//console.log(typeof(value1));
//console.log(value1);

/*
In the above case we have stored string value in score1 variable and that is converted in number which JS does, but when we try to print the same value it will give 'NaN' (Not a number)
*/

//If Value is NULL:
score2 = null
//console.log(typeof score2);

let value2 = Number(score2)
//console.log(typeof(value2));
//console.log(value2);

//For undefined
score3 = undefined
//console.log(typeof score2);

let value3 = Number(score3)
//console.log(typeof(value3));
//console.log(value3);

/*
The values that cannot be converted into a number like String, undefined it stores the value as NaN.
For value which can be easily converted into Number type it stores the actual value like null, 1, true -> 1
*/

//Converting Number to Boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/*
For Number to Boolean:
1 => true ; 0=>false
When we pass an empty string and try converting in Boolean => false
When we pass some value like isLoggedIn = "AB" to Boolean type it is evaluated to => true 
*/

//Converting to String
let someNum = 22
let stringNum = String(someNum)
console.log(typeof stringNum);
console.log(stringNum);

//Type conversion is important because most of the times when working with forms we get data in string format which we would like to convert in some other type.