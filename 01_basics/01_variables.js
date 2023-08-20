const accountId = 123467
//Reserves a space in memory (using let and var)
let accountEmail = "sid@google.com"
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 3  //When we try to run this the compiler (nodejs) will not allow us to do so as we have declared accountId as constant
console.log(accountId);

//Just declare a variable and print it and check the value:
var accountState; //; is optional

//Changing other values:
accountEmail = "ssd@google.com"
accountPassword = "22334"

//We can also declare a variable without defining the type (like let or const) but this is not recommended
accountCity = "Mumbai"

//Now instead of printing each variable use console.log we will use console.table
console.table([accountEmail,accountPassword,accountCity,accountState])

/*
There are two ways to declare a variable:
1. Using var 
2. Using let

(var is not recommended)
As using var there was a long scope problem
Example: varPass = "12"

Later on if there are multiple developers working on the same project and they created another file and performin some operation (like loop) they changed the variable
So in that case it used to update the value of the variable throughout.

So nowdays: Only let is used (which overcomes the long scope problem)

Note: Prefer not to use var, because of issue in block scope and functional scope.

In Javascript if we declare a variable without assigning any value to it, then JS assigns the variable 'undefined' as default value

*/