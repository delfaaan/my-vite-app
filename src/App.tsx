import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './styles.css';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/my-vite-app/' element={<CharacterList />} />
				<Route path='/my-vite-app/character/:id' element={<CharacterDetail />} />
			</Routes>
		</Router>
	);
};

export default App;