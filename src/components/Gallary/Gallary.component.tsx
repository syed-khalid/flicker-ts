import React, { useContext } from "react";
import "./Gallary.styles.css";

//Context Import
import { ApiContext } from "../../context/context";

type Props = {};

const Gallary = (props: Props) => {
	const { photosArray } = useContext(ApiContext);

	return (
		<div className='gallary'>
			{photosArray.map(({ id, server, secret }) => (
				<img
					key={id}
					src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
				/>
			))}
		</div>
	);
};

export default Gallary;
