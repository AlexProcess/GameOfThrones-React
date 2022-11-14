/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react'
import DetailElement from '../../components/DetailElement/DetailElement'
import ImageColumn from '../../components/ImageColumn/ImageColumn'
import { useTranslation } from "react-i18next";
import { trackPromise } from 'react-promise-tracker';
import TextColumn from '../../components/TextColumn/TextColumn';
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './CharacterDetailPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import vector from '../../assets/img/vector.png';

function CharacterDetailPage() {

  const navigate = useNavigate();
  const { name } = useParams();
  const [t, i18n] = useTranslation('global');
  const [character, setCharacter] = useState([]);
  const [house, setHouse] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const {data} = await axios.get('https://api.got.show/api/show/characters/' + name);
      setCharacter(data);
    };

    const getHouse = async () => {
      const {data} = await axios.get('https://api.got.show/api/show/houses/' + character.house);
      setHouse(data);
    };

    trackPromise(
      getCharacter(),
      getHouse(),
    );
    
  }, [character.house, name]);

  return (
    <>
      <div className='c-back'><img src={vector} alt='' onClick={() => navigate(-1)}/><p>{t('return')}</p></div>
      <div className='c-detail'>
        {(character.length < 1 && house.length < 1) ? <Loading /> : <>
        <DetailElement character={character} image={character.image}/>
          <div className='c-detail--details'>
            {house[0] ? <ImageColumn house={house[0]} title={t('detailc.house')}/> : ''}
            {character.allegiances.length > 0 ? <TextColumn elements={character.allegiances} title={t('detailc.allegiances')} /> : ''}
            {character.appearances.length > 0 ? <TextColumn elements={character.appearances} title={t('detailc.appearances')} /> : ''}
            {character.father ? <TextColumn elements={character.father} title={t('detailc.father')} /> : ''}
            {character.siblings.length > 0 ? <TextColumn elements={character.siblings} title={t('detailc.siblings')} /> : ''}
            {character.titles[0] ? <TextColumn elements={character.titles} title={t('detailc.titles')} /> : ''}
            {character.religion[0] !== ''? <TextColumn elements={character.religion} title={t('detailc.religion')} /> : ''}
          </div>
        </>}
      </div>
    </>
  )
}

export default CharacterDetailPage