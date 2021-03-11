import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sneakers = (props) => {
	const [sneakers, setSneakers] = useState([]);
	const url =
		'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&releaseYear=2020';

	useEffect(() => {
		fetch(url) //<-- the url as a string
			// Wait for the response and convert it to json
			.then((res) => res.json())
			// Take the json and do something with it
			.then((json) => {
				// console.log(json.results);
				const sneakerData = json.results;
				setSneakers(sneakerData);

				// the json parameter holds the json data
				// so here's where you will need to
				// use the setBirds method put the json into state
			})
			// Catch and log any errors to the console
			.catch(console.error);
	}, [url]);

	// if (sneakers) {
	// 	return (
	// 		<div>
	// 			<h1>{sneakers.name}</h1>
	// 		</div>
	// 	);
	// }
	return (
		<div>
			<h2>Sneaker Gallery</h2>
			<div className='container'>
				{sneakers.map((sneaker) => (
					<Link to={`/Sneaker/${sneaker.id}`} key={sneaker.id}>
						<div className='card' key={sneaker.id}>
							<div className='card-image'>
								<img src={sneaker.media.thumbUrl} alt={sneaker.id} />
							</div>
							<h3>{sneaker.title}</h3>
							<p>Retail Price: ${sneaker.retailPrice}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sneakers;
