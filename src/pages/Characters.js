import { useState, useEffect } from 'react';

import Welcome from '../components/Welcome';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Info from '../components/Info';
import CharacterList from '../components/CharacterList';

import useFetch from '../hooks/useFetch';

function Characters() {
  const [data, setData] = useState(null);
  const [isDataLoading, dataError, performFetchData] = useFetch(
    'https://rickandmortyapi.com/api/character',
    setData,
  );

  useEffect(() => {
    performFetchData();
  }, []);

  console.log(data);

  if (data === null) {
    return null;
  }

  if (dataError) {
    return 'Unable to get the characters, please try again';
  } else if (isDataLoading) {
    return 'Loading...';
  }

  return (
    <>
      <Welcome />
      <Header />
      <SearchBar />
      <Info />
      <CharacterList characters={data.results} />
    </>
  );
}

export default Characters;
