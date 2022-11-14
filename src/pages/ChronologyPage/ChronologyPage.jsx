/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import Loading from "../../components/Loading/Loading";
import { trackPromise } from 'react-promise-tracker';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Chronology from '../../components/Chronology/Chronology';
import './ChronologyPage.scss';

function ChronologyPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const {data} = await axios.get('https://api.got.show/api/show/characters/');
      setCharacters(data.filter(character => character.age !== null));
    };

    trackPromise(
      getCharacters()
    );

  }, []);

  return (
      <div className='c-chronology'>
        {characters.length < 1 ? <Loading /> : <Chronology characters={characters.filter(character => character.age.age)}/>}
      </div>
  )
}

export default ChronologyPage