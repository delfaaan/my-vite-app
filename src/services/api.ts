const BASE_URL = 'https://swapi.dev/api';

export const fetchCharacters = async (url: string = `${BASE_URL}/people/?page=1`) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch characters.');
	}

	const data = await response.json();

	return data;
};

export const fetchCharacter = async (id: number) => {
	const response = await fetch(`${BASE_URL}/people/${id}`);

	if (!response.ok) {
		throw new Error('Failed to fetch character.');
	}

	const data = await response.json();

	return data;
};

export const fetchResource = async (url: string) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('Failed to fetch resource.');
	}

	const data = await response.json();

	return data;
};