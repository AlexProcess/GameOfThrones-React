import React from 'react'
import './TextColumn.scss'

function TextColumn({title, elements}) {

  return (
    <div className='c-textc'>
      <h2>{title}</h2>
      <ul className='c-textc--elem'>
        {typeof elements !== 'string' ? elements.map((element, index) => {return (<li key={index}>{element}</li>)}) : <li>{elements}</li>}
      </ul>
    </div>
  )
}

export default TextColumn