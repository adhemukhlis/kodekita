const { greeterText } = require( "./src/GreeterText" );
const { initGlobalTools } = require( "./src/InitGloballTools" );
const { cryptoRabbitEncrypt, cryptoRabbitDecrypt } = require( "./src/Crypto" );
const { setCookie, getCookie } = require( "./src/Cookie" );
const { setSession, getSession, deleteSession, clearSession } = require( "./src/Session" );
const { idrCurrencyFormatter, idrCurrencyParser } = require( "./src/Formatter" );
const { isJsonString } = require( "./src/Checking" );
const { promiseAll } = require( "./src/PromiseAll" );

module.exports = {
	initGlobalTools,
	greeterText,
	cryptoRabbitEncrypt,
	cryptoRabbitDecrypt,
	setCookie,
	getCookie,
	setSession,
	getSession,
	deleteSession,
	clearSession,
	idrCurrencyFormatter,
	idrCurrencyParser,
	isJsonString,
	promiseAll
};