var crypto = require('crypto-js');

var secretMessage = {
	name: 'Pravin',
	secretName: '007'
};

var sercretKey = "1231abc";

var encryptMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), sercretKey);

console.log('Encrypted Message: '+ encryptMessage );

var bytes = crypto.AES.decrypt(encryptMessage, sercretKey);

var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8))


console.log('Decrypted Message: '+ decryptedMessage );
console.log('Decrypted Message secretName: '+ decryptedMessage.secretName + " " +  decryptedMessage.name);