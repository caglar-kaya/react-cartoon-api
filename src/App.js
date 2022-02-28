import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FavouriteContextProvider } from './contexts/FavouriteContext';

import Characters from './pages/Characters';
import Favourites from './pages/Favourites';
import CharacterDetails from './pages/CharacterDetails';
import FilteredCharacters from './pages/FilteredCharacters';

function App() {
  return (
    <FavouriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/character/:id" element={<CharacterDetails />} />
          <Route
            path="/character/:name/:status"
            element={<FilteredCharacters />}
          />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
  );
}

export default App;
