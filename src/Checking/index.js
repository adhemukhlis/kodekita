function isJsonString( str ) {
	try {
		const parsing_test = JSON.parse( str );
		if ( typeof parsing_test === 'number' ) {
			return false;
		} else if ( typeof parsing_test === 'boolean' ) {
			return false;
		}
	} catch ( e ) {
		return false;
	}
	return true;
}
exports.isJsonString = isJsonString;