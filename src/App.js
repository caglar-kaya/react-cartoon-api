import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FavouriteContextProvider } from './contexts/FavouriteContext';

import Characters from './pages/Characters';
import Favourites from './pages/Favourites';

function App() {
  return (
    <FavouriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
  );
}

export default App;
