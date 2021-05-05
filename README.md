# kodekita
**Kodekita** is a collection of javascript code that can be reused without rewriting the code.

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
    - [greeterText](#greeterText)  
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
<br>

## API
<br>

### initGlobalTools
`initGlobalTools( object:config )` will initiate a global variable or function that can be accessed freely without importing

<!-- embedme samples/init-global-tools.js -->
```js
import { initGlobalTools } from "kodekita";
// call on the root component index.js
initGlobalTools({ devStatus: true, devLog: true });

console.log( window.devStatus ); // return true if it is under development
window.devLog( 'this message will not appear after production!' ); //can be used to view logs only during development
```
Name | Description | Type | Config  
--------|---------- | ----|------
<small>`window.devLog( all:log )`</small> | same as `console.log`, but the logs will not be displayed after the `production` / `npm run build` | <small>function</small> | <small>`devLog` : `true`</small>
<small>`window.devStatus`</small> | Global boolean variable that contains `true` if running under `development` | <small>boolean</small> | <small>`devStatus` : `true`</small> 
<small>`window.localhostStatus`</small>| Global boolean variable that contains `true` if running under `localhost` | <small>boolean</small>|<small>`localhostStatus` : `true`</small> 
<small>*`*variables and functions are not needed`*</small>| Configuring to disable [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi "React Developer Tools") extension. This feature is only needed if the browser uses the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi "React Developer Tools") extension  |<small>boolean</small>|<small>`disableReactDevTools` : `true`</small> 
<br>

### promiseAll
`promiseAll( list:functions )` will execute multiple functions asynchronously
<!-- embedme samples/promise-all.js -->
```js
import { promiseAll } from "kodekita";
function showLog( ) {
	console.log( 'Im here!' );
}
promiseAll([ showLog, showLog, showLog ]);
```
<br>

### isJsonString
`isJsonString( string:jsonString )` will check and return true if string is a stringified JSON
<!-- embedme samples/is-json-string.js -->
```js
import { isJsonString } from "kodekita";
const stringifiedJson = '{name:"Joko",gender:"male",city:"Bekasi"}';
isJsonString( stringifiedJson ); //true
```
<br>

### idrCurrencyFormatter
`idrCurrencyFormatter( number:currency )` will format integer into IDR currency format
<!-- embedme samples/idr-currency-formatter.js -->
```js
import { idrCurrencyFormatter } from "kodekita";
idrCurrencyFormatter( 64000 ); //Rp 64000
```
<br>

### idrCurrencyParser
`idrCurrencyParser( string:currency )` will parse IDR currency into integer
<!-- embedme samples/idr-currency-parser.js -->
```js
import { idrCurrencyParser } from "kodekita";
idrCurrencyParser( 'Rp 64000' ); //64000
```
<br>

### greeterText
`greeterText( string:name )` will display greeter with name
<!-- embedme samples/greeter-text.js -->
```js
import { greeterText } from "kodekita";

greeterText( 'Joko' );
```
<br>

### setSession
`setSession( string:header, string:value)` stores data to Session Storage.
<!-- embedme samples/set-session.js -->
```js
import { setSession } from "kodekita";

setSession( 'name', 'Joko' );
```
<br> 

### getSession
`getSession( string:header )` get data from Session Storage.
<!-- embedme samples/get-session.js -->
```js
import { getSession } from "kodekita";

getSession( 'name' );
```
<br>

### deleteSession
`deleteSession( string:header )` delete data from Session Storage.
<!-- embedme samples/delete-session.js -->
```js
import { deleteSession } from "kodekita";

deleteSession( 'name' );
```
<br>

### clearSession
`clearSession()` clear all data from Session Storage.
<!-- embedme samples/clear-session.js -->
```js
import { clearSession } from "kodekita";

clearSession( );
```

<!--### setCookie
### getCookie
### cryptoRabbitEncrypt
### cryptoRabbitDecrypt -->