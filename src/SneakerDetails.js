import React, { useState, useEffect } from 'react';

const SneakerDetails = (props) => {
	const [sneakerDetails, setDetails] = useState();
	const url =
		`https://v1-sneakers.p.rapidapi.com/v1/sneakers/${props.match.params.id}`;

	const API_KEY = process.env.REACT_APP_API_KEY;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'v1-sneakers.p.rapidapi.com',
			'X-RapidAPI-Key': `${API_KEY}`,
		},
	};
	useEffect(() => {
		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
				// console.log(response)
				const sneakerData = json.results;
				setDetails(sneakerData);
			})
			.catch((err) => console.error(err));
	}, [url]);

	if (!sneakerDetails) {
		return null;
	}
	return (
		<div>
			<h1>Sneaker Details</h1>
			<div className='details-container'>
				<img
					src={sneakerDetails[0].media.smallImageUrl}
					alt={sneakerDetails[0].id}
				/>
				<h2>
					{sneakerDetails[0].brand} {sneakerDetails[0].title}
				</h2>

				<h3>Colorway: {sneakerDetails[0].colorway}</h3>
				<h3>Gender: {sneakerDetails[0].gender}</h3>
				<h3>Release Date: {sneakerDetails[0].releaseDate}</h3>
				<h3>Retail Price: ${sneakerDetails[0].retailPrice}</h3>
				<h3>Style ID: {sneakerDetails[0].styleId}</h3>
			</div>
		</div>
	);
};

export default SneakerDetails;
