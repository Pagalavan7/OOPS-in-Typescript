import { CurrentAccount } from "./Accounts/currentAccount";
import { SavingsAccount } from "./Accounts/savingsAccount";
const currentAccount = new CurrentAccount(1000);

// currentAccount.withdraw(200);
// currentAccount.withdraw(300);

const savingsAccount = new SavingsAccount(1000);
savingsAccount.deposit(100);
savingsAccount.withdraw(1105);
savingsAccount.withdraw(1105);
