import { ChangeEvent, useContext, useState, SyntheticEvent } from "react";
import "./SearchBox.styles.css";

//Context Import
import { ApiContext } from "../../context/context";

const SearchBox = () => {
	const { searchInput, setSearchInput } = useContext(ApiContext);
	const [searchValue, setSearchValue] = useState("");

	function formSubmitHandler(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		setSearchInput(searchValue);
	}

	return (
		<div className='search-box-container'>
			<form className='search-box-form' onSubmit={formSubmitHandler}>
				<input
					type='text'
					id='search'
					placeholder='Search...'
					value={searchValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setSearchValue(e.target.value);
					}}
				/>
				<button>Search</button>
			</form>
		</div>
	);
};

export default SearchBox;
