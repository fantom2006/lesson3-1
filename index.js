//dz 3
  
const phoneNumber = "+996500101010"
const message = 'hello'

const send = (`Отправлено SMS на номер ${phoneNumber}: ${message}`)
console.log(send);



//dz 4

const bankAccount = {
  accountNumber: "1234567890", 
  balance: 5000, 

  sendTransfer: function (accountNumber, amount) {
    
    this.balance -= amount;
    console.log(`Переведено ${amount} на счет ${accountNumber}. Новый баланс: ${this.balance}`);
  },
};

bankAccount.sendTransfer("9876543210", 2000);