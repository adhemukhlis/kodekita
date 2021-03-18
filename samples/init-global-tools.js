import { initGlobalTools } from "kodekita";
// call on the root component index.js
initGlobalTools({ devStatus: true, devLog: true });

console.log( window.devStatus ); // return true if it is under development
window.devLog( 'this message will not appear after production!' ); //can be used to view logs only during development