function idrCurrencyFormatter( val ) {
	return val === undefined || val === '' ? 'Rp -' : new Intl
		.NumberFormat('id', {
		style: 'currency',
		currency: 'IDR'
	})
		.format( val )
		.replace( /(\.|,)00$/g, '' );
}
function idrCurrencyParser( val ) {
	try {
		if ( typeof val === 'string' && !val.length ) {
			val = '0.0';
		}
		const group = new Intl
			.NumberFormat( 'id' )
			.format( 1111 )
			.replace( /1/g, "" );
		const decimal = new Intl
			.NumberFormat( 'id' )
			.format( 1.1 )
			.replace( /1/g, "" );
		var reversedVal = val.replace( new RegExp( "\\" + group, "g" ), "" );
		reversedVal = reversedVal.replace( new RegExp( "\\" + decimal, "g" ), "." );
		reversedVal = reversedVal.replace( /[^0-9.]/g, "" );
		const digitsAfterDecimalCount = ( reversedVal.split( "." )[ 1 ] || [ ]).length;
		const needsDigitsAppended = digitsAfterDecimalCount > 2;
		if ( needsDigitsAppended ) {
			reversedVal = reversedVal * Math.pow( 10, digitsAfterDecimalCount - 2 );
		}
		return Number.isNaN( reversedVal ) ? 0 : reversedVal;
	} catch ( error ) {
		console.error( error );
	}
};
export { idrCurrencyFormatter, idrCurrencyParser };