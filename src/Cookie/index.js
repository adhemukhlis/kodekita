function setCookie( header, value, ages ) {
	const d = new Date( );
	d.setTime(d.getTime( ) + ( ages * 24 * 60 * 60 * 1000 ));
	const expires = `expires=${ d.toUTCString( ) }`;
	document.cookie = `${ header }=${ value };${ expires };path=/`;
}
function getCookie( header ) {
	const cname = header + '=';
	const decodedCookie = decodeURIComponent( document.cookie );
	const ca = decodedCookie.split( ';' );
	for ( let i = 0; i < ca.length; i += 1 ) {
		let c = ca[i];
		while ( c.charAt( 0 ) === ' ' ) {
			c = c.substring( 1 );
		}
		if ( c.indexOf( cname ) === 0 ) {
			const value = c.substring( cname.length, c.length );
			return value === 'true' ? true : value === 'false' ? false : value === '' ? undefined : value;
		}
	}
	return undefined;
}
exports.setCookie = setCookie;
exports.getCookie = getCookie;