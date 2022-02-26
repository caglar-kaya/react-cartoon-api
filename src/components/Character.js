import { Link } from 'react-router-dom';

import CharacterImage from './CharacterImage';

import '../css/components/Character.css';

function Character({ id, name, image, gender, speice, status }) {
  return (
    <Link to={`/character/${id}`}>
      <div className="character-element">
        <div className="character-title">
          <h2>{name}</h2>
        </div>
        <CharacterImage characterId={id} image={image} name={name} />
        <div className="character-infos">
          <ul>
            <li>Gender: {gender}</li>
            <li>Species: {speice}</li>
            <li>Status: {status}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Character;
