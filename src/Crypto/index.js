const { RabbitLegacy, enc } = require( "crypto-js" );
function cryptoRabbitEncrypt({ text, password }) {
	return RabbitLegacy.encrypt( text.toString( ), password ).toString( );
}
function cryptoRabbitDecrypt({ encrypted, password }) {
	return RabbitLegacy
		.decrypt( encrypted, password )
		.toString( enc.Utf8 );
}
exports.cryptoRabbitEncrypt = cryptoRabbitEncrypt;
exports.cryptoRabbitDecrypt = cryptoRabbitDecrypt;