const accountId = 22
let accountEmail = "srishti@gmail.com"
var accountPass = "12345" //not to use var
accountCity = "gkp"
let accountState;

//accountId = 2//not allowed

accountEmail="hc@hc.com"
accountPass="54321"
accountCity="lko"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])
