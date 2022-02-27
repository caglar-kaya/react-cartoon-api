import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { FavouriteContextProvider } from './contexts/FavouriteContext';
import Characters from './pages/Characters';

function App() {
  return (
    <FavouriteContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </FavouriteContextProvider>
  );
}

export default App;
