export class Account {
  private balance: number;

  constructor(private initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Amount Invalid");
    }
  }

  withdraw(amount: number) {
    if (this.balance > amount) {
      this.balance = this.balance -= amount;
      console.log("Amount withdrawn: ", amount, "\n Balance: ", this.balance);
    }
  }
}
