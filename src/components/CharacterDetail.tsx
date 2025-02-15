import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacter, fetchResource } from '../services/api';
import { Character } from '../types/types';

const CharacterDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character | null>(null);
	const [films, setFilms] = useState<string[]>([]);
	const [species, setSpecies] = useState<string[]>([]);
	const [vehicles, setVehicles] = useState<string[]>([]);
	const [starships, setStarships] = useState<string[]>([]);

	useEffect(() => {
		const getCharacter = async () => {
			const data = await fetchCharacter(Number(id));
			setCharacter(data);

			const filmData = await Promise.all(data.films.map((url: string) => fetchResource(url)));
			setFilms(filmData.map((film: any) => film.title));

			const speciesData = await Promise.all(data.species.map((url: string) => fetchResource(url)));
			setSpecies(speciesData.map((specie: any) => specie.name));

			const vehicleData = await Promise.all(data.vehicles.map((url: string) => fetchResource(url)));
			setVehicles(vehicleData.map((vehicle: any) => vehicle.name));

			const starshipData = await Promise.all(data.starships.map((url: string) => fetchResource(url)));
			setStarships(starshipData.map((starship: any) => starship.name));
		};

		getCharacter();
	}, [id]);

	if (!character) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>{character.name}</h1>
			<p>Height: {character.height}</p>
			<p>Mass: {character.mass}</p>
			<p>Hair Color: {character.hair_color}</p>
			<p>Skin Color: {character.skin_color}</p>
			<p>Eye Color: {character.eye_color}</p>
			<p>Birth Year: {character.birth_year}</p>
			<p>Gender: {character.gender}</p>

			<h2>Films</h2>
			<ul>
				{films.map((film, index) => (
					<li key={index}>{film}</li>
				))}
			</ul>

			<h2>Species</h2>
			<ul>
				{species.map((specie, index) => (
					<li key={index}>{specie}</li>
				))}
			</ul>

			<h2>Vehicles</h2>
			<ul>
				{vehicles.map((vehicle, index) => (
					<li key={index}>{vehicle}</li>
				))}
			</ul>

			<h2>Starships</h2>
			<ul>
				{starships.map((starship, index) => (
					<li key={index}>{starship}</li>
				))}
			</ul>
		</div>
	)
};

export default CharacterDetail;