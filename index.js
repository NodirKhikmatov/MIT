//module core

//external

//file

// const moment = require("moment");

// const calculate = require("./hisob");

// const natija = calculate.kopaytirish(60, 20);

// console.log("natija", natija);

// const natija1 = calculate.ayirish(160, 20);

// console.log("natija1", natija1);

// const natija2 = calculate.bolish(2222, 20);

// console.log("natija2", natija2);

// console.log(require("module").wrapper);

// console.log(arguments);

const Account = require("./account");
Account.tellMeAbountClass();
Account.tellMeTime();
console.log("=================");

const myAccount = new Account("Martin", 200000, 8462910746);
myAccount.giveMeDetails();
myAccount.makeDeposit(10000000);

myAccount.withdrawMoney(4000000);
myAccount.makeDeposit(2500000);
