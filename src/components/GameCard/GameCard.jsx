import React from 'react' 
//import { Link } from 'react-router-dom'
// import moment from 'moment'

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia }) => {
  return (
    <>
      <div>
      <a href={`/GameDetails/${game.id}`}>
        <h1>{game.name}</h1>
      </a>
        <img className='img-responsive' src={game.box_art_url} alt={game.name}/>
        <h1>{game.name}</h1>
      
      
      </div>
      
    
    </>
  );
}
 
export default GameCard;