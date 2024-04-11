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
      
  
    depositAccountInfo(amount){

      this.balance +=amount;
        
    }

    withdrawnAccountInfo(amount){

      if(amount<=this.balance){

          this.balance -=amount;
  
      }else{
          console.log(`Want to withdrawn: ${amount}`);
          console.log(`Insufficent Balance: ${amount}`);
      }

    }

    displayAccountInfo(){

      console.log(`Accont No:${this.accoutNO}`);
      console.log(`Owner Name:${this.ownerName}`);
      console.log(`Total Balance:${this.balance}`);

    }
}

  const obj=new BankAccount(101,"Azizul Haque",1000);

  console.log("Account Details");
  obj.depositAccountInfo(500);
  obj.withdrawnAccountInfo(160);
  obj.displayAccountInfo();



  console.log("\nAccount Details");
  const obj2=new BankAccount(102,"Anas Muhit",2000);

  obj2.depositAccountInfo(500);
  obj2.withdrawnAccountInfo(700);
  obj2.displayAccountInfo();


