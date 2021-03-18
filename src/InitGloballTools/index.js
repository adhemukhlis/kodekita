function initGlobalTools({ devStatus, devLog, localhostStatus, disableReactDevTools }) {
	if ( devLog ) {
		window.devLog = process.env.NODE_ENV === 'development' ? console
			.log
			.bind( console ) : ( ) => {};
		window.devLog( `%c ---------- window.devLog - the logs with window.devLog are only shown while in development mode 👌 ----------`, `color:#FCD639; background-color: transparent; padding:10px; border: 2px dashed #FCD639; border-radius: 0.8em;` );
	}
	if ( devStatus ) {
		window.devStatus = process.env.NODE_ENV === 'development';
	}
	if ( localhostStatus ) {
		window.localhostStatus = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match( /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ ));
	}
	if ( disableReactDevTools ) {
		if ( typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object' ) {
			for (let [key,
				value]of Object.entries( window.__REACT_DEVTOOLS_GLOBAL_HOOK__ )) {
				window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == 'function' ? ( ) => {} : null;
			}
		}
	}
}
export { initGlobalTools };