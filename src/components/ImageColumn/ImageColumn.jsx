import React from 'react'
import { Link } from 'react-router-dom'
import './ImageColumn.scss'

function ImageColumn({house, title}) {
    return (
      <div className='c-imgc'>
        <h2>{title}</h2>
        <Link to={`/houses/${house.name}`}>{house.logoURL ? <img src={house.logoURL} alt='' /> : <p>{house.name}</p>}</Link>
      </div>
    )
}

export default ImageColumn