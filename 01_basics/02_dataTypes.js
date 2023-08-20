/*
There is a quite a difference between JS (8 years ago) and modern JS
-> The older JS did not support classes, modules, arrow function.

-> "use strict": Treats all the JS code as newer version. (Once it is declared as new we cannot say no strict later)
But nowdays bydefault this strict method is defined in backend, but we can specify to let others know that all modern practices is been followed

At the beginning (JS was introduced) for every browser (Chrome, Mozilla) had its own standard/way of interpreting.
So they thought there should be common standard defined and they came with ECMA script
like if you are using a loop this should be the input and how the o/p should look (after that we can do what we want)

Documentation:
1 - https://tc39.es/ecma262/
2- https://developer.mozilla.org/en-US/docs/Web/JavaScript

*/

//So using alert in nodejs there is a different way, the method defined below was used previously when JS was bundled with browser (check it by inspecting a page-> Go to console -> Type the code below)
//alert(2+2)


//console.log(2 + 2); console.log("Hi") //Not recommended: As code readibility is not present
//Better Way:
/*
console.log(2 + 2)
console.log("Hi")
*/

let name = "Sidhant"
let age = 25

//Datypes:
//number : (Range) 2 to power of 52
// string : (Recommended to enclose value in "") can use '' to store value
// bigint 
// boolean : true/false
// null : (It's a data type). It's a standalone value.