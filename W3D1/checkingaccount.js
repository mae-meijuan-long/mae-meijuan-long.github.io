class CheckingAccount extends Account{
    constructor(overdraft,...args){
        super(...args)
        this._overdraft = overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(value){
        if(this._balance<0){
        }
        this._overdraft = value;
    }

    withdraw(amount) {
         if (amount <= 0) {
                    throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + this._overdraft ) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

     toString() {
            return "Checking Account " + this._number + ": balance " + this._balance + ": overdraft " + this._overdraft;
     }

    endOfMonth() {
       //Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500
       if (this._balance < 0) {
           return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
       }

       return "";
    }
}