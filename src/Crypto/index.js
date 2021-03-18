import { RabbitLegacy, enc } from "crypto-js";
async function cryptoRabbitEncrypt({ text, password }) {
	return RabbitLegacy.encrypt( text.toString( ), password ).toString( );
}
async function cryptoRabbitDecrypt({ encrypted, password }) {
	return RabbitLegacy
		.decrypt( encrypted, password )
		.toString( enc.Utf8 );
}
export { cryptoRabbitEncrypt, cryptoRabbitDecrypt };