class SavingsAccount extends Account{
    constructor(interest,...args){
        super(...args)
        this._interest = interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(value){
        this._interest = value;
    }
    addInterest(){
        console.log(" this.balance==>"+ this._interest);
        this._balance += this._balance*this._interest/100;
    }

    toString() {
            return "Saving Account " + this._number + ": balance " + this._balance
            + ": interest " + this._interest;
    }

    endOfMonth() {
        const currentBalance = this._balance;
        this.addInterest();

        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._balance - currentBalance}`;
    }

}