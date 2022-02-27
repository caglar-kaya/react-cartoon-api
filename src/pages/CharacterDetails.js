import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Info from '../components/Info';
import CharacterList from '../components/CharacterList';

import useFetch from '../hooks/useFetch';

import '../css/pages/CharacterDetails.css';

function CharacterDetails() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [isLoading, error, performFetch] = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    setCharacter,
  );

  useEffect(() => {
    performFetch();
  }, [id]);

  if (error || character === null) {
    return (
      <>
        <Header />
        <Info number={0} />
        <div className="character-details-reminder">
          <h4>Something went wrong finding the character. Please try again!</h4>
        </div>
      </>
    );
  } else if (isLoading) {
    return 'Loading...';
  }

  return (
    <>
      <Header />
      <Info number={1} />
      <CharacterList characters={[character]} />
    </>
  );
}

export default CharacterDetails;
