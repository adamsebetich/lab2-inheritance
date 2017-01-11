// Has a constructor with the following parameters
// 	initialBalance (a number)
// 	ownerName (a string)
// Saves those parameters as private fields in your class
// Has a **deposit** method which takes a number amount as a parameter and adds it to your account's balance
// Has a **withdraw** method which takes a number amount as a parameter and subtracts it to your account's balance
// Has a **checkBalance** method which prints out the current balance of the account and the account owner's name 

class Bank {
    //attributes
    private initialBalance: number;
    private ownerName: string;
    private amount: number;

    constructor (theBalance:number, theName:string) {
        this.initialBalance = theBalance;
        this.ownerName = theName;
    }
    desposit(amount) {
        this.initialBalance = this.initialBalance + amount; 
    }
    withdraw(amount) {
        this.initialBalance = this.initialBalance - amount;
    }
    checkBalance(theBalance:number, theName:string) {
        console.log('The total amount of '+theBalance+' belongs to ' +theName)
    }
}
let Gary:Bank = new Bank(12000, "Gary Johnson");


Gary.desposit(40);
Gary.withdraw(300);
Gary.checkBalance(theBalance, theName);



