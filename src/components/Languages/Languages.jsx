/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import en from '../../assets/img/en.png';
import es from '../../assets/img/es.png';
import './Languages.scss';

function Languages() {

  const [t, i18n] = useTranslation('global');

  return (
    <div className='c-lang'>
      {/* Ruta hacia el Home, junto a las traducciones */}
      <img src={es} onClick={() => i18n.changeLanguage('es')} alt=''/>      
      <img src={en} onClick={() => i18n.changeLanguage('en')} alt=''/>
    </div>
  )
}

export default Languages