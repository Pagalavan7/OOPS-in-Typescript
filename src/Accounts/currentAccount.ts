import { Account } from "./account";

export class CurrentAccount extends Account {
  static minimumBalance: number = 500;

  constructor(initialBalance: number) {
    super(initialBalance);
  }

  deposit(amount: number) {
    if (amount > 0) {
      this._balance += amount;
      console.log("Amount deposited:", amount, "\nBalance is:", this._balance);
    } else {
      console.log("Deposit Amount Invalid. Enter valid amount");
    }
  }

  withdraw(amount: number) {
    if (amount < 0) {
      console.log("Withdraw amount invalid. Enter valid amount");
    } else if (this._balance >= amount + CurrentAccount.minimumBalance) {
      this._balance = this._balance -= amount;
      console.log(
        "Amount withdrawn: ",
        amount,
        "\nBalance is: ",
        this._balance
      );
    } else {
      console.log(
        "Balance is only ",
        this._balance,
        ".Minimum balance should be 500.Cannot withdraw more than",
        this._balance - 500
      );
    }
  }
}
