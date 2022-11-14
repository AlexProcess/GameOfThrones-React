import React from 'react'
import './HousesGallery.scss'
import { useNavigate } from 'react-router-dom';

const HousesGallery = ({house}) => {
  const navigate = useNavigate();

  return (
      <div className='b-house__card'>
        <img className='b-house__image' src={house.logoURL} onClick={()=> navigate(`/houses/detail/${house.name}`)} alt=''/>
        <h2 className='b-house__name'>{house.name}</h2>
      </div>
  )
}

export default HousesGallery