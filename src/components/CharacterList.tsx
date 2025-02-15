import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/api';
import { ApiResponse, Character } from '../types/types';

const CharacterList: React.FC = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);

	useEffect(() => {
		const getCharacters = async () => {
			const url = `https://swapi.dev/api/people/?page=${currentPage}`
			const data = await fetchCharacters(url);

			setCharacters((data as ApiResponse<Character>).results);
			setTotalPages(Math.ceil((data as ApiResponse<Character>).count / 10));
		};

		getCharacters();
	}, [currentPage]);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handlePageClick = (page: number) => {
		setCurrentPage(page);
	};

	const renderPageDots = () => {
		const pageDots = [];

		for (let i = 1; i <= totalPages; i++) {
			pageDots.push(
				<button
					key={i}
					onClick={() => handlePageClick(i)}
					disabled={i === currentPage}
					style={{
						padding: '5px 5px',
						backgroundColor: i === currentPage ? '#007bff' : '#ddd',
						border: 'none',
						cursor: 'pointer'
					}}
				>
				</button>
			);
		}

		return pageDots;
	};

	return (
		<div>
			<div style={{ textAlign: 'center', marginBottom: '20px' }}>
				<img src='./star-wars-logo.svg' alt="Star Wars Logo" style={{ width: '300px', height: 'auto' }} />
			</div>
			<ul>
				{characters.map((character) => (
					<li key={character.url}>
						<a href={`/character/${character.url.split('/').filter(Boolean).pop()}`}>
							{character.name}
						</a>
					</li>
				))}
			</ul>
			<div className='pagination'>
				<button onClick={handlePreviousPage} disabled={currentPage === 1}>
					&lt;
				</button>
				{renderPageDots()}
				<button onClick={handleNextPage} disabled={currentPage === totalPages}>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default CharacterList;