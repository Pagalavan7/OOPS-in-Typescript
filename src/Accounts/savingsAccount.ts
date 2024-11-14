import { Account } from "./account";

export class SavingsAccount extends Account {
  static interestRate: number = 0.05; //5%interest

  constructor(initialBalance: number) {
    super(initialBalance);
  }

  deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount + amount * SavingsAccount.interestRate;
      console.log("Amount deposited:", amount, "\nBalance is:", this._balance);
    } else {
      console.log("Deposit Amount Invalid. Enter valid amount");
    }
  }

  withdraw(amount: number) {
    if (amount < 0) {
      console.log("Withdraw amount invalid. Enter valid amount");
    } else if (this._balance >= amount) {
      this._balance = this._balance -= amount;
      console.log("Amount withdrawn: ", amount, "\nBalance is:", this._balance);
    } else {
      console.log("Cannot withdraw amount. Balance is only", this._balance);
    }
  }
}
