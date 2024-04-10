class BankAccount{
    
    static accounts={};

    constructor(accoutNO,ownerName,balance) {

        if(BankAccount.accounts[accoutNO]){
            
            console.log("Accouts Number Already exists");
    
        }
            this.accoutNO      = accoutNO;
            this.ownerName     = ownerName;
            this.balance       = balance;
         
      }
      
      displayAccountInfo(){

        console.log(`Accont No:${this.accoutNO}`);
        console.log(`Owner Name:${this.ownerName}`);
        console.log(`Total Balance:${this.balance}`);
    }

      depositAccountInfo(amount){

        this.balance +=amount;
        console.log(`Deposit: ${amount}`);
        console.log(`Total Current Balance: ${this.balance}`);

             
      }

      withdrawnAccountInfo(amount){
        if(amount<=this.balance){

            this.balance -=amount;
            console.log(`Total Withdrawn: ${amount}`);
            console.log(`Total Current Balance: ${this.balance}`);


        }else{
            console.log(`Want to withdrawn: ${amount}`);
            console.log(`Insufficent Balance: ${amount}`);

        }

      }

     
}

const obj=new BankAccount(101,"Azizul Haque",1000);
const obj2=new BankAccount(102,"Anas Muhit",2000);

console.log("Account Details");
obj.displayAccountInfo();
obj.depositAccountInfo(500);
obj.withdrawnAccountInfo(1600);

console.log("<br/>");

console.log("Accouts Details");

obj2.displayAccountInfo();
obj2.depositAccountInfo(500);
obj2.withdrawnAccountInfo(700);

