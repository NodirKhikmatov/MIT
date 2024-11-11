const moment = require("moment");

class Account {
  #amount;
  #account_id;
  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  tellMeBalance() {
    console.log(`sizning hisobingizdagi qoldiq: ${this.#amount}`);
    return this.#amount;
  }

  withdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(
        `hisobingizdan ${amount} yechildi va qoldiq ${this.#amount}$`
      );
    } else {
      console.log(`sizning balansizgizdagi pul yetarli emas: ${this.#amount}$`);
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(`hisobingiz toldirildi, ${this.#amount}$`);
  }

  giveMeDetails() {
    console.log(
      `salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`
    );
    console.log("Hisob raqamingiz", this.#account_id);
  }
  static tellMeAbountClass() {
    console.log("bu class accountlarni yasash un ximat qiladi");
  }
  static tellMeTime() {
    console.log(`hozirgi vaqt ${moment().format("YYYY MM DD HH:mm:ss")}`);
  }
}

module.exports = Account;
