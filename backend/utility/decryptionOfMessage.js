const CryptoJS = require('crypto-js');
// const secretKey = 'mySecretKey';

function decryptionOfMessage(encryptedMessage) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, process.env.ENCRYPT_KEY);
    const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedMessage);
}

module.exports = {
    decryptionOfMessage
}