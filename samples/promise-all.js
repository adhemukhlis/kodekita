import { promiseAll } from "kodekita";
function showLog( ) {
	console.log( 'Im here!' );
}
promiseAll([ showLog, showLog, showLog ]);