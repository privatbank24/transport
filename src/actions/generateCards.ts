export const generateCards = () => {
   if(!localStorage.getItem('userCards')){
      let card1 = {
         cardNumber: `5168 ${generateRandomNumber(4, 10)} ${generateRandomNumber(4, 10)} ${generateRandomNumber(4, 10)}`,
         balance: `${generateRandomNumber(3, 10)}.${generateRandomNumber(2, 10)}`,
         cardImageIndex: generateRandomNumber(1, 20),
      };
      let card2 = {
         cardNumber: `4149 ${generateRandomNumber(4, 10)} ${generateRandomNumber(4, 10)} ${generateRandomNumber(4, 10)}`,
         balance: `${generateRandomNumber(3, 10)}.${generateRandomNumber(2, 10)}`,
         cardImageIndex: generateRandomNumber(1, 20),
      };

      if(card1.balance[0] === '0'){
         card1.balance = `1${generateRandomNumber(3, 10)}.${generateRandomNumber(2, 10)}`;
      }
      if(card2.balance[0] === '0'){
         card2.balance = `1${generateRandomNumber(3, 10)}.${generateRandomNumber(2, 10)}`;
      }
      localStorage.setItem('userCards', JSON.stringify([card1, card2]));
   }
}

const generateRandomNumber = (number: number, scope: number) => {
   let res = '';
   for(let i = 0; i < number; i++) {
      res += String(Math.floor(Math.random() * scope));
   }
   return res;
}