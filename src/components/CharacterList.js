import Character from './Character';

import '../css/components/CharacterList.css';

function CharacterList({ characters }) {
  return (
    <div className="characters">
      <ul>
        {characters.map((character) => {
          return (
            <li key={`character-${character.id}`} className="character-item">
              <Character
                id={character.id}
                name={character.name}
                image={character.image}
                gender={character.gender}
                speice={character.species}
                status={character.status}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;
