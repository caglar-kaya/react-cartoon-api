import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Info from '../components/Info';
import CharacterList from '../components/CharacterList';

import useFetch from '../hooks/useFetch';

function FilteredCharacters() {
  const { name, status } = useParams();

  const url = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`;

  const [data, setData] = useState(null);
  const [isDataLoading, dataError, performFetchData] = useFetch(url, setData);

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
      <Header />
      <Info number={data.results.length} />
      <CharacterList characters={data.results} />
    </>
  );
}

export default FilteredCharacters;
