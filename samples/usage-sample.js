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