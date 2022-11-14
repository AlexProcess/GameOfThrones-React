import React from 'react';
import './DetailElement.scss';

function DetailElement({character, image}) {

  return (
    <div className='c-detel'>
      <img src={image} alt=''></img>
      <span>{character.name}</span>
    </div>
  )
}

export default DetailElement