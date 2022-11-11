import { useState, useEffect, useContext } from "react";
import "./App.css";

//Context Import
import { ApiContext } from "./context/context";

//Component Imports
import Gallary from "./components/Gallary/Gallary.component";

function App() {
	const { photosArray } = useContext(ApiContext);

	return (
		<div className='App'>
			<h1>Flicker</h1>
			<Gallary />
		</div>
	);
}

export default App;

