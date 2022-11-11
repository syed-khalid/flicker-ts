import { useState, useEffect, useContext } from "react";
import "./App.css";

//Context Import
import { ApiContext } from "./context/context";

//Component Imports
import Gallary from "./components/Gallary/Gallary.component";
import SearchBox from "./components/Search/SearchBox.component";

function App() {
	const { photosArray } = useContext(ApiContext);

	return (
		<div className='App'>
			<h1 className='heading'>Flicker</h1>
			<SearchBox />
			<Gallary />
		</div>
	);
}

export default App;

