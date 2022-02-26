import HeaderLinks from './HeaderLinks';

import '../css/components/Header.css';

function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">The Rick and Morty API</h1>
      <HeaderLinks />
    </div>
  );
}

export default Header;
