import React, { useEffect, useState } from 'react';
import { fetchCharacters } from './services/api';

const App: React.FC = () => {
	const [name, setName] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = 'https://swapi.dev/api/people/1';
				const data = await fetchCharacters(url);
				
				setName(data.name);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Star Wars Character Name</h1>
			<div id="name">{name}</div>
		</div>
	);
};

export default App;