class Bank {

  constructor() {
        this.accounts = [];
        this.accountNumber = 1;
    }

    addAccount(){
        let acc = new Account(this.accountNumber);
        this.accounts.push(acc);
        this.accountNumber += 1;
        return this.accounts.length;
    }

     addSavingsAccount(interest){
        let acc = new SavingsAccount(interest,this.accountNumber);
        this.accounts.push(acc);
        this.accountNumber += 1;
        return this.accounts.length;
     }

     addCheckingAccount(overdraft) {
        let acc = new CheckingAccount(overdraft,this.accountNumber);
        this.accounts.push(acc);
        this.accountNumber += 1;
        return this.accounts.length;
     }

     closeAccount(number){
            for (let i in this.accounts) {
                if (this.accounts[i].getNumber() == number) {
                    this.accounts.splice(i, 1);
                    break;
                }
            }
     }

     accountReport() {
        let st = "";
        for (let acc of this.accounts) {
            st += acc.toString() + '\n';
        }

        return st;
     }

     static nextNumber(){
            return this.accountNumber;
     }
     endOfMonth() {
         results = [];
         for (let acc of this.accounts) {
             results.push(acc.endOfMonth());
         }
     }
}
