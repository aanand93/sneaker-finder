import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sneakers = (props) => {
	const [sneakers, setSneakers] = useState([]);
	// const url =
	// 	'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&releaseYear=2020';

	// useEffect(() => {
	// 	fetch(url) //<-- the url as a string
	// 		// Wait for the response and convert it to json
	// 		.then((res) => res.json())
	// 		// Take the json and do something with it
	// 		.then((json) => {
	// 			// console.log(json.results);
	// 			const sneakerData = json.results;
	// 			setSneakers(sneakerData);
	// 		})
	// 		// Catch and log any errors to the console
	// 		.catch(console.error);
	// }, [url]);

	const url =
		'https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&releaseYear=2023';

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
			.then((response) => response.json())
			.then((json) => {
				// console.log(response)
				const sneakerData = json.results;
				setSneakers(sneakerData);
			})
			.catch((err) => console.error(err));
	}, [url]);

	return (
		<div>
			<h2>Sneaker Gallery</h2>
			<div className='container'>
				{/* map sneakers as 'sneaker' to dynamically call rest of atributes of each sneaker object */}
				{sneakers.map((sneaker) => (
					<Link to={`/Sneaker/${sneaker.id}`} key={sneaker.id}>
						<div className='card' key={sneaker.id}>
							<div className='card-image'>
								{/* Sneaker Image */}
								<img src={sneaker.media.thumbUrl} alt={sneaker.id} />
							</div>
							{/* Sneaker Name including brand */}
							<h3>{sneaker.title}</h3>
							{/* Sneaker Price */}
							<p>Retail Price: ${sneaker.retailPrice}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sneakers;
