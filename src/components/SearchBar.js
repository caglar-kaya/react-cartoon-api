import '../css/components/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-text-button-container">
        <input placeholder="enter a character name to search"></input>
        <select name="status" id="status">
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit">SEARCH FOR CHARACTER</button>
      </div>
    </div>
  );
}

export default SearchBar;
