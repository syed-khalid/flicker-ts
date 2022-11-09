import { useState, useEffect } from "react";
import "./App.css";

//Importing ApiKey to call API
import { apiKey } from "./assets/api";

function App() {
	useEffect(() => {
		const APICALL = async () => {
			const response = await fetch(
				"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=abbe32b68df38fa373c4bec565af4eb7&tags=moutains&per_page=24&format=json&nojsoncallback=1"
			);
			const finalResponse = await response.json();
			console.log(finalResponse.photos.photo.map((image: {}) => image));
		};

		APICALL();
	}, []);

	return (
		<div className='App'>
			<h1>Hello World</h1>
		</div>
	);
}

export default App;

