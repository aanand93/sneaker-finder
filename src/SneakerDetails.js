import React, { useState, useEffect } from 'react';

const SneakerDetails = (props) => {
	const [sneakerDetails, setDetails] = useState();
	const url = `https://api.thesneakerdatabase.com/v1/sneakers/${props.match.params.id}`;

	useEffect(() => {
		fetch(url) //<-- the url as a string
			// Wait for the response and convert it to json
			.then((res) => res.json())
			// Take the json and do something with it
			.then((json) => {
				console.log(json.results);
				const sneakerData = json.results;
				setDetails(sneakerData);

				// the json parameter holds the json data
				// so here's where you will need to
				// use the setBirds method put the json into state
			})
			// Catch and log any errors to the console
			.catch(console.error);
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
