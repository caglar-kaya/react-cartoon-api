import { Link } from 'react-router-dom';

import '../css/components/HeaderLinks.css';

function HeaderLinks() {
  return (
    <div className="header-links">
      <Link to={'/'} className="header-link">
        Characters
      </Link>
      <Link to={'/favourites'} className="header-link">
        Favourites
      </Link>
    </div>
  );
}

export default HeaderLinks;
