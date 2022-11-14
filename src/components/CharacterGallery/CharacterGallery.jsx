import React from 'react'
import './CharacterGallery.scss'
import { useNavigate } from 'react-router-dom'


const CharacterGallery = ({character}) => {
const navigate = useNavigate()
const {age} = character

  return (
    <div className='b-father__characters'>
      <div className='b-character__card' onClick={() => navigate(`/characters/${age.name}`)}>
          <img src={character.image} alt=''/>
          <div className='b-character-container'>
          <h2 className='b-character-name'>{character.name}</h2>
      </div>
      </div>
    </div>
    
    // <div>{characters.map(({character}) => <CharactersPage key={character.id} character={character}/>)}</div>
  )
}

export default CharacterGallery