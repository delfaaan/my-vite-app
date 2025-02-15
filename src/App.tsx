import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './styles.css';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<CharacterList />} />
				<Route path='/character/:id' element={<CharacterDetail />} />
			</Routes>
		</Router>
	);
};

export default App;