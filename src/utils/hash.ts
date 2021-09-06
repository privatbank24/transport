var CryptoJS = require("crypto-js");

export const hash = (value: string) => {
   return CryptoJS.AES.encrypt(value, 'Kdjak71G~!').toString();
};

export const unHash = (value: any) => {
   return CryptoJS.AES.decrypt(value, 'Kdjak71G~!').toString(CryptoJS.enc.Utf8);
};