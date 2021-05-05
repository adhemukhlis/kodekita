function greeterText( name ) {
	const currentHour = new Date( ).getHours( );
	const text = `Good ${ currentHour >= 3 && currentHour < 12 ? 'Morning' : currentHour >= 12 && currentHour < 15 ? 'Afternoon' : currentHour >= 15 && currentHour < 20 ? 'Evening' : currentHour >= 20 || currentHour < 3 ? 'Night' : '' }, ${ name }!`;
	return text;
}
exports.greeterText = greeterText;