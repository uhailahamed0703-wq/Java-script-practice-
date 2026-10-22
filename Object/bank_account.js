let account ={
    owner: 'Uhail Ahamed',
    balance:100000,

    deposit: function(amount){
        if(amount<0){
            console.log("Invalid Amount")
        }else{
            this.balance= this.balance+amount;
            console.log("Deposit Successful");
        }

    },

    withdraw: function(amount){
        if(amount<0){
            console.log("Invalid Amount")
        }else if(amount>this.balance){
            console.log("Insufficient balance")
        }else{
            this.balance = this.balance-amount
            console.log("Withdrawal successful")
        }
    }



};


account.deposit(500000)
account.withdraw(400000)

console.log("Owner:", account.owner);
console.log("Balance:", account.balance);