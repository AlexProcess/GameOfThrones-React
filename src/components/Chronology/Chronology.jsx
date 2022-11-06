/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import ChronoElement from '../ChronoElement/ChronoElement'
import './Chronology.scss'
import vector from '../../assets/img/vector.png'

function Chronology(props) {

  let [isFlip, useFlip] = useState(false);
  
  let age = 0;

  const [characters, setCharacters] = useState(props.characters);

  const orderCharactersAsc = () => setCharacters([...characters.sort((a,b) => a.age.age - b.age.age)]);

  const toggleOrder = () => {
    setCharacters([...characters.reverse()]);
     useFlip(!isFlip);
  };

  useEffect(() => {orderCharactersAsc()},[])

  return (
    <>
      <div className='c-toggle' onClick={toggleOrder}>{age = characters[0].age.age}</div>
      <img src={vector} alt='' className={isFlip ? 'flip' : ''} />
      <div className='c-chrono'>
      {characters.map((character, index) => {
        return (
            <ChronoElement character={character} index={index} key={character._id} />

        );
      })}
      </div>
    </>
  )
}

export default Chronology