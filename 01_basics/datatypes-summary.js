/*
Basically data types categorization is done based on how it is stored in memory and how they are accessed.

1. Primitive Data Types
2. Non-Primitive Data types (or :Non-Referenced)

-> All primitive data types are of call-by value type that means whenver we use these types  we are not given the actual reference of these (i.e. actual memory location reference) instead we are given a copy of it and then all changes are done on the copy itself not the original value.

-> Primitive Data Types:
(7 types)
String, Number, Boolean, Null, undefined,  symbol, BigInt (used for scientific values or bigger values)

-> Reference (Non-primitive types)
i) Provides direct reference of the variable. 
Example: Array, Objects, Functions.

Q. Is JS a static typed or dynamically typed language?
-> JS is a dynamic typed language as we do not need to specify the data type we can declare the value directly.
The compiler automatically infers the types.

Example: 
const score = 100   //In Typescript: const score:Number = 100 (Ensures typesafety)

const score1 = 100.2 //There is no special type for floating point values like float all numbers are treated as one.
const isLoggedIn = false
const outsideTemp = null //It is not empty or 0.

*/

const score = 100   //In Typescript: const score:Number = 100 (Ensures typesafety)

const score1 = 100.2 //There is no special type for floating point values like float all numbers are treated as one.
const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

//Even if it looks that both the variables (id and anotherId) are assigned with same values, Symbol will make sure that both the values are different (even if the value passed is same)
console.log(id === anotherId);

//Array Example: Declared with '[]'
const superheros = ['Shaktiman', "Naagraj", "Hanuman"]

//Objects: Decalred within '{}'. Consists of key-value pairs. Data type can be a string, number, boolean even a function, array or object.

let myObj = {
    name: "Sid",
    age : 29

}

//There are different ways of declaring function, we will see the variable decalration 
const myFunction = function(){
    console.log("Hello World");

}

//HW: Create a list and mention all the types of data types used in this lecture
console.log(typeof myFunction); //It will return function, it is also called as Object Function
console.log(typeof myObj);
console.log(typeof superheros);
console.log(typeof id);
console.log(typeof score);
console.log(typeof score1);
console.log(typeof outsideTemp);

let bigNum = 234567890123n;
console.log(typeof bigNum);

const stringtype = "Hey everyone"
console.log(typeof stringtype);

