import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NikeDunks = () => {
	const [dunks, setDunks] = useState([]);
	const url =
		'https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=Dunks&brand=Nike';

	useEffect(() => {
		fetch(url) //<-- the url as a string
			// Wait for the response and convert it to json
			.then((res) => res.json())
			// Take the json and do something with it
			.then((json) => {
				console.log(json.results);
				const sneakerData = json.results;
				setDunks(sneakerData);

				// the json parameter holds the json data
				// so here's where you will need to
				// use the setBirds method put the json into state
			})
			// Catch and log any errors to the console
			.catch(console.error);
	}, [url]);

	return (
		<div>
			<div>
				<h2>Nike Dunks</h2>
				<div className='container'>
					{dunks.map((sneaker) => (
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
		</div>
	);
};

export default NikeDunks;
