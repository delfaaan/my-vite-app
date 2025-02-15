import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/CharacterList';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/my-vite-app/' element={<CharacterList />} />
			</Routes>
		</Router>
	);
};

export default App;