import './App.css';

import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Welcome />
      <SearchBar/>
      <Info/>
    </div>
  );
}

export default App;
