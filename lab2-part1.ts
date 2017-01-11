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

    constructor (theBalance:number, theName:string) {
        this.initialBalance = theBalance;
        this.ownerName = theName;
    }
    desposit(deposit:number) {
        this.initialBalance = this.initialBalance + deposit; 
    }
    withdraw(withdraw:number) {
        this.initialBalance = this.initialBalance - withdraw;
    }
    checkBalance(theBalance:number, theName:string) {
        console.log('The total amount of '+theBalance+' belongs to'+ theName)
    }
}
