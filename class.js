//class concept is from object oriented programing
class Accountdetails {
    constructor(name, accNo, balance) {
        this.name = name;
        this.accNo = accNo;
        this.balance = balance;

    }
    withDraw(amount) {
        // return this.balance-amount
        if (this.balance > amount) {
            this.balance = this.balance - amount
            return `withDrawn amount is ${amount},total balance is ₹${this.balance}`

        } else {
            return `Sorry "insufficent balance"!!! 
      please enter the amount lessthan ₹${this.lessamount()}`
        }
    }

    deposit(amount) {
        if (this.balance >= amount) {
            this.balance = this.balance + amount
            return `deposited amount is ${amount},your total balance is ₹${this.balance}`
        }
        else if (this.balance <= amount) {
            this.balance = this.balance + amount
            return `deposited amount is ${amount},total balance is ₹${this.balance}`
        }
        else {

        }
    }


    getbalance() {
        return `total balance in account is ₹${this.balance}`

    }

    lessamount(){
        return this.balance
    }

}
var accforsuri = new Accountdetails("suriya", 987654321, 1000)
var accforvichi = new Accountdetails("vishva", 123456789, 1000000)
var accforsiva = new Accountdetails("sivanandam", 23456782345, 10000000)
console.log(accforsuri);
// console.log(accforvichi);
// console.log(accforsiva);



// console.log(accforsuri.withDraw(5000));

console.log(accforsuri.withDraw(5000));
// console.log(accforsuri.getbalance());


console.log(accforsuri.deposit(5000));

console.log(accforsuri.getbalance());

console.log(accforsuri.withDraw(4000));
console.log(accforsuri.getbalance());

