import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/components/SearchBar.css';

function SearchBar() {
  const [name, setName] = useState();
  const [status, setStatus] = useState();

  const navigate = useNavigate();

  const searchCharacters = () => {
    if (name === undefined || name === '' || status === undefined) {
      alert('You need to enter a character name and also choose a status!');
    } else {
      navigate(`/character/${name}/${status}`);
    }
  };

  return (
    <div className="search-container">
      <div className="search-text-button-container">
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="enter a character name to search"
        ></input>
        <select
          onChange={(e) => setStatus(e.target.value)}
          name="status"
          id="status"
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit" onClick={searchCharacters}>
          SEARCH FOR CHARACTER
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
