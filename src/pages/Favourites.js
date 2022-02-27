import { useContext, useEffect, useState } from 'react';

import Header from '../components/Header';
import Info from '../components/Info';
import CharacterList from '../components/CharacterList';

import FavouriteContext from '../contexts/FavouriteContext';

import '../css/pages/Favourites.css'

function Favourites() {
  const { favourites } = useContext(FavouriteContext);

  const [characters, setCharacters] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetches = favourites.map((id) =>
      fetch(`https://rickandmortyapi.com/api/character/${id}`),
    );

    setError(false);

    Promise.all(fetches)
      .then((results) => {
        return Promise.all(results.map((result) => result.json()));
      })
      .then((characters) => {
        setCharacters(characters);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, [favourites]);

  if (error) {
    return 'Something went wrong finding the character. Please try again!';
  } else if (isLoading) {
    return 'Loading...';
  } else if (characters === null || characters.length === 0) {
    return (
      <>
        <Header />
        <Info number={characters.length} />
        <div className="favourites-reminder">
          <h4>You haven't chosen any favourites yet!</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <Info number={characters.length} />
      <CharacterList characters={characters} />
    </>
  );
}

export default Favourites;
