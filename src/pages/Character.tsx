// /Users/antonypry/Documents/Учеба/Политех/3 семестр/Веб-клиент/web-client/src/pages/Character.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface CharacterData {
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
}

function Character() {
  const { id } = useParams<{ id: string; }>();
  const [character, setCharacter] = useState<CharacterData | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);

  useEffect(() => {
    const getCharacterInfo = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const jsonData: CharacterData = response.data;
        setCharacter(jsonData);
        setLocationName(response.data.location.name);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    getCharacterInfo();
  }, [id]);

  if (!character) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt='Загрузка'></img>
      <p>Статус: {character.status}</p>
      <p>Класс: {character.species}</p>
      <p>Пол: {character.gender}</p>
      <p>Местонахождение: {locationName}</p>
    </div>
  );
}

export default Character;