async function promiseAll( funcList ) {
	return await Promise.all( funcList );
};
exports.promiseAll = promiseAll;
