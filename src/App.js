import './App.css';
// import Home from './Home';
import Sneakers from './Sneakers';
import Jordans from './Jordans';
import NMDs from './NMDs';
import Yeezys from './Yeezys';
import NikeDunks from './NikeDunks';
import { Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<nav className='Links'>
				<Link to='/Home'>Home</Link>
				<Link to='/Jordans'> Jordans</Link>
				<Link to='/NMDs'>NMDs</Link>
				<Link to='/Yeezys'>Yeezys</Link>
				<Link to='/NikeDunks'>Nike Dunks</Link>
			</nav>
			<main className='Main'>
				<h1>My Sneaker Finder</h1>
				<Route path='/Home' render={() => <Sneakers />} />
				<Route path='/Jordans' render={() => <Jordans />} />
				<Route path='/NMDs' render={() => <NMDs />} />
				<Route path='/Yeezys' render={() => <Yeezys />} />
				<Route path='/NikeDunks' render={() => <NikeDunks />} />
			</main>
		</div>
	);
}

export default App;
