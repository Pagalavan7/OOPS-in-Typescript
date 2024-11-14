export abstract class Account {
  protected _balance: number;

  constructor(private initial_balance: number) {
    this._balance = initial_balance;
  }

  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;

  get balance() {
    return `${this._balance} is your acccount balance`;
  }
}
