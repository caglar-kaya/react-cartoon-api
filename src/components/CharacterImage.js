/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react';

import FavouriteContext from '../contexts/FavouriteContext';

import heartEmpty from '../assets/heart-regular.svg';
import heartFilled from '../assets/heart-solid.svg';

function CharacterImage({ characterId, image, name }) {
  const { isFavourite, toggleFavourite } = useContext(FavouriteContext);

  const isFav = isFavourite(characterId);

  return (
    <div className="character-image-container">
      <img className="character-image" src={image} alt={name} />
      <div
        className="character-image-favourite-container"
        onClick={(e) => {
          e.preventDefault();
          toggleFavourite(characterId);
        }}
      >
        <img
          className="character-image-favourite"
          src={isFav ? heartFilled : heartEmpty}
        />
      </div>
    </div>
  );
}

export default CharacterImage;
