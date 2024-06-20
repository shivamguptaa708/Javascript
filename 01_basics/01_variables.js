const accountId = 144455
let accountEmail = "shivam@gmail.com"
var accountPassword = "12345"
accountcity = "nashik"
let accountState;  // undefined in console

console.log(accountId)

/*
perfer not to use var 
because of issue in block scope  and functional scope     
*/

console.table([accountId,accountEmail,accountPassword,accountcity, accountState])