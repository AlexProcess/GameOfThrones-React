/* eslint-disable no-unused-vars */
import React from 'react'
import group from '../../assets/img/Group.png'
import './IconHome.scss';
import {NavLink } from 'react-router-dom';

function IconHome() {


  return (
    <div className='c-lang'>
      {/* Ruta hacia el Home, junto a las traducciones */}
      <NavLink to="./">  <img className='c-home__image' src= {group} alt=''></img> </NavLink> 
    </div>
  )
}

export default IconHome