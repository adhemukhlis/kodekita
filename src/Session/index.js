function setSession( header, value ) {
	return window
		.sessionStorage
		.setItem(header, JSON.stringify( value ));
}
function getSession( header ) {
	return JSON.parse(window.sessionStorage.getItem( header ));
}
function deleteSession( header ) {
	return window
		.sessionStorage
		.removeItem( header );
}
function clearSession( ) {
	return window
		.sessionStorage
		.clear( );
}
export { setSession, getSession, deleteSession, clearSession };