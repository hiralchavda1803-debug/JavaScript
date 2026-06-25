// Create account object
let account = 
{
    accountNumber: 123456789,
    holderName: "Hiral Chavda",
    balance: 20000,

    
    checkBalance: function () 
    {
        console.log("Current Balance: ₹" + this.balance);
    }
};

// 1. Display account details
console.log("Account Number:", account.accountNumber);
console.log("Holder Name:", account.holderName);
console.log("Balance: ₹" + account.balance);


// 2. Deposit ₹5000 into the balance
account.balance += 5000;
console.log("Balance after deposit: ₹" + account.balance);


// 3. Add accountType property
account.accountType = "Savings";
console.log("Account Type:", account.accountType);


// 4. Delete accountType property
delete account.accountType;
console.log(account.accountType);


// 5. Call checkBalance() method
account.checkBalance();