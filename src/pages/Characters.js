import { useState, useEffect } from 'react';

import Welcome from '../components/Welcome';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Info from '../components/Info';
import CharacterList from '../components/CharacterList';

import useRandom from '../hooks/useRandom';
import useFetch from '../hooks/useFetch';

function Characters() {
  const randomPage = useRandom(42);

  const [data, setData] = useState(null);
  const [isDataLoading, dataError, performFetchData] = useFetch(
    `https://rickandmortyapi.com/api/character?page=${randomPage}`,
    setData,
  );

  useEffect(() => {
    performFetchData();
  }, []);

  if (dataError) {
    return 'Unable to get the characters, please try again';
  } else if (isDataLoading || data === null) {
    return 'Loading...';
  }

  return (
    <>
      <Welcome />
      <Header />
      <SearchBar />
      <Info number={data.results.length} />
      <CharacterList characters={data.results} />
    </>
  );
}

export default Characters;
