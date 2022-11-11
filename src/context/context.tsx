import {
	useState,
	createContext,
	useEffect,
	Dispatch,
	SetStateAction,
} from "react";

export const apiKey = "abbe32b68df38fa373c4bec565af4eb7";

type TApiContext = {
	photosArray: any[];
	setPhotosArray: Dispatch<SetStateAction<any>>;
	searchInput: string;
	setSearchInput: Dispatch<SetStateAction<any>>;
};

export const ApiContext = createContext<TApiContext>({
	photosArray: [],
	setPhotosArray: () => {},
	searchInput: "mountains",
	setSearchInput: () => {},
});

export const ApiContextProvider = ({ children }: any) => {
	const [photosArray, setPhotosArray] = useState([]);
	const [searchInput, setSearchInput] = useState("mountains");

	useEffect(() => {
		const apiCall = async () => {
			try {
				const response = await fetch(
					`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchInput}&per_page=24&format=json&nojsoncallback=1`
				);
				const { photos } = await response.json();
				setPhotosArray(photos.photo);
			} catch (e) {
				console.log("error");
			}
		};

		apiCall();
	}, [searchInput]);

	const value: TApiContext = {
		photosArray,
		setPhotosArray,
		searchInput,
		setSearchInput,
	};

	return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
