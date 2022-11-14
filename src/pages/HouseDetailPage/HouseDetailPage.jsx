/* eslint-disable no-unused-vars */
import React from 'react'
import DetailElement from '../../components/DetailElement/DetailElement'
import { useTranslation } from "react-i18next";
import { trackPromise } from 'react-promise-tracker';
import TextColumn from '../../components/TextColumn/TextColumn';
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './HouseDetailPage.scss';
import { useParams, useNavigate  } from 'react-router-dom';
import vector from '../../assets/img/vector.png';
import stark from '../../assets/img/stark.webp';

function HouseDetailPage() {
  
  const navigate = useNavigate();
  const { name } = useParams();
  const [t, i18n] = useTranslation('global');
  const [house, setHouse] = useState([]);

  useEffect(() => {
    const getHouse = async () => {
      const {data} = await axios.get('https://api.got.show/api/show/houses/' + name);
      setHouse(data);
    };

    trackPromise(
      getHouse()
    );
    
  }, [name]);

  return (
    <>
      <div className='c-back'><img src={vector} alt='' onClick={() => navigate(-1)}/><p>{t('return')}</p></div>
      <div className='c-detail'>
        {house.length < 1 ? <Loading /> : <>
        <DetailElement character={house[0]} image={house[0].logoURL ? house[0].logoURL : stark } />
          <div className='c-detail--details'>
            {house[0].words ? <TextColumn elements={house[0].words} title={t('detailh.words')} /> : ''}
            {house[0].seat.length > 1 ? <TextColumn elements={house[0].seat} title={t('detailh.seat')} /> : ''}
            {house[0].region.length > 1 ? <TextColumn elements={house[0].region} title={t('detailh.region')} /> : ''}
            {house[0].allegiance.length > 1 ? <TextColumn elements={house[0].allegiance} title={t('detailh.allegiance')} /> : ''}
            {house[0].religion[0] ? <TextColumn elements={house[0].religion} title={t('detailh.religion')} /> : ''}
            {house[0].createdAt ? <TextColumn elements={(new Date(house[0].createdAt).getDay()+21) + '/' + (new Date(house[0].createdAt).getMonth()+1) + '/' + new Date(house[0].createdAt).getUTCFullYear()} title={t('detailh.createdAt')}/> : ''}
          </div>
        </>}
      </div>
    </>

  )
}

export default HouseDetailPage