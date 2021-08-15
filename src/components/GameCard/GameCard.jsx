import React from 'react' 
// import moment from 'moment'

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia }) => {
  return (
    <>
      <div>
        <img src={game.box_art_url} alt={game.name}/>
        <h1>{game.name}</h1>
      </div>
      
    
    </>
  );
}
 
export default GameCard;