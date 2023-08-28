// Simple Comparisons:
// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 >=3);
// console.log(2 <=3);
// console.log(2==3);
// console.log(2!=3);

//All these return a boolean value.

// Problem arises when we try to compare records of different data types (like string number). It does not provide the predicted result
//console.log("2" > 1);  //Here Javascript automatically converts the string into number and does the comparison
//console.log("02" > 1);

//TypScript is just a set of rules through which we can avoid the above (as it will not allow two different data types to be compared)


//Conparioson using NULL
//console.log(null > 0);      //o/p: false
//console.log(null == 0);     //o/p: false
//console.log(null >= 0);     //o/p: true (Ah!, Strange?)

/*
**Note:
The reason null >=0 returns true:
1. The equality check (==) and the comparisons work differently like: <,>, <=,>=
*2. Comparisons convert null value to a number, treating it as 0.
That's why in the 3rd comparison : It first converted (as comparison operator was used) to a number i.e. 0 and then compared it 
0>=0 -> True (As 0=0)
And in 1st comparison 0> 0 = false

-> So try to avoid such conversions as it can lead to confusion.
*/


//Strict check: Done using '==='. It compares the value as well as the datatypes.
console.log("2" === 2);


