# kodekita
**Kodekita** is a collection of javascript code that can be reused, without rewriting the code.

***

## Daftar Isi
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
    - [initGlobalTools](#initglobaltools)  
    - [promiseAll](#promiseall)  
    - [isJsonString](#isjsonstring)  
    - [idrCurrencyFormatter](#idrcurrencyformatter)  
    - [idrCurrencyParser](#idrcurrencyparser)  
    - [setSession](#setsession)  
    - [getSession](#getsession)  
    - [deleteSession](#deletesession)  
    - [clearSession](#clearsession)  
    - [setCookie](#setcookie)  
    - [getCookie](#getcookie)  
    - [cryptoRabbitEncrypt](#cryptorabbitencrypt)  
    - [cryptoRabbitDecrypt](#cryptorabbitdecrypt)  
***

## Installation
```shell
npm install --save kodekita
```

## Usage
<!-- embedme samples/usage-sample.js -->
```js
import React, { Component } from "react";
import { initGlobalTools } from "kodekita";
initGlobalTools({ devLog: true, devStatus: true });

class App extends Component {
	componentDidMount( ) {
		/** same as console.log, but the logs will not be displayed after the production / npm run build */
		window.devLog( `Dev Status: ${ window.devStatus }` );
	}
	render( ) {
		return (
			<div>
				<h1>Hello Joko!</h1>
				<p>Happy Hacking! :)</p>
			</div>
		);
	}
}

export default App;
```

## API
### initGlobalTools
`initGlobalTools()` will initiate a global variable or function that can be accessed freely without importing

<!-- embedme samples/init-global-tools.js -->
```js
import { initGlobalTools } from "kodekita";
// call on the root component index.js
initGlobalTools({ devStatus: true, devLog: true });

console.log( window.devStatus ); // return true if it is under development
window.devLog( 'this message will not appear after production!' ); //can be used to view logs only during development
```
Name | Description | Type | Usage  
--------|---------- | ----|------
`window.devLog()`| same as `console.log`, but the logs will not be displayed after the `production` / `npm run build` | function | set `devLog` : `true`
`window.devStatus`| Global Boolean variable that contains `true` if running under `development` | boolean |set `devStatus` : `true` 
`window.localhostStatus`| Global Boolean variable that contains `true` if running under `localhost` | boolean|set `localhostStatus` : `true` 


### promiseAll
`promiseAll()` will execute multiple functions asynchronously
<!-- embedme samples/promise-all.js -->
```js
import { promiseAll } from "kodekita";
function showLog( ) {
	console.log( 'Im here!' );
}
promiseAll([ showLog, showLog, showLog ]);
```
### isJsonString
`isJsonString()` will check and return true if string is a stringified JSON
<!-- embedme samples/is-json-string.js -->
```js
import { isJsonString } from "kodekita";
const stringifiedJson = '{name:"Joko",gender:"male",city:"Bekasi"}';
isJsonString( stringifiedJson ); //true
```
### idrCurrencyFormatter
`idrCurrencyFormatter()` will format integer into IDR currency format
<!-- embedme samples/idr-currency-formatter.js -->
```js
import { idrCurrencyFormatter } from "kodekita";
idrCurrencyFormatter( 64000 ); //Rp 64000
```
### idrCurrencyParser
`idrCurrencyParser()` will parse IDR currency into integer
<!-- embedme samples/idr-currency-parser.js -->
```js
import { idrCurrencyParser } from "kodekita";
idrCurrencyParser( 'Rp 64000' ); //64000
```
<!-- ### greeterWord
### setSession
### getSession
### deleteSession
### clearSession
### setCookie
### getCookie
### cryptoRabbitEncrypt
### cryptoRabbitDecrypt -->
