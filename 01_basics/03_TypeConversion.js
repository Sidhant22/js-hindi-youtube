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
//console.log(typeof stringNum);
//console.log(stringNum);

//Type conversion is important because most of the times when working with forms we get data in string format which we would like to convert in some other type.

//*** Operators ***/

let v1 = 2
let negv1 = -v1
// console.log(negv1);

// console.log(2+2);
// console.log(2-2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

//String Concat (Simple)
let str1 = "Hello"
let str2 = " Sidhant" //Added some for the second string because when joining them it should not appear like one word

let str3 = str1 + str2
//console.log(str3);

//Different cases:
//console.log("1" + 2);
//console.log(1 + "2");

//In this case as the starting value is declared as string all the other values are treated as String 
//console.log("1" + 2 + 2); //Expected: "1" + 4 -> 14 ; Actual: 122

//In this case: As the starting value is an integer/number it treats them as number performs the addition and then concatenates it with the string

//console.log(1 + 2 + "2"); //Here also we would expect to get 122 but instead we get: 32 (i.e. It performs addition of the number first and then concatenates the number with string)

//But this is not a good practice to write such confusing operation in a line, if it is needed to then make use of '()' to denote the priority of operations
//like console.log((3+4) * 5 %3)

// Tricky conversions: Not Recommended to use in actual coding

//1.
//console.log(+true);
//console.log(+"");

//2.

let num1 , num2 , num3
num1 = num2 = num3 = 2+2
//Not recommended as there code readability is less. There are other ways to assign same value to different variables as well.

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

//HW: Check about prefix and post operation in MDN doc for JS - Asked in Interview
//Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment (did read about this)

/*
In case of post fix operator (x++):
let num1 = 2
let num2 = num1++

[In the above case num2 will be assigned the original value of num1 i.e. 2 and then the increment (+1) is done and final value stored in num1 =3]

Prefix Operator: It performs the increment/decrement operation first and then assigns the value
let num3 = 1
lt num4 = ++num3
*/
