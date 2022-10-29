"use strict";

class CheckingAccount extends Account{

    constructor(number,overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance+this._overdraftLimit)) {
            throw Error("Overdraft Limit exceeded!");
        }
        this._balance -= amount;
    }

    toString()
    {
        return "Checking Account " + this._number + ": balance " + this._balance + " , overdraft limit: "+this._overdraftLimit;
    }

    endOfMonth()
    {
        let warning=(this._balance<0)?"Warning, low balance ":"";
        return warning+this.toString();
    }
}