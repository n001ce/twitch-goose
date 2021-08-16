import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia }) => {
  return (
    <>
      <div>
      <a href={`/games/${game.id}`}>
        <h1>{game.name}</h1>
      </a>
        <img className='img-responsive' src={game.box_art_url} alt={game.name}/>
        
      
      
      </div>
      <MediaForm
        media={game}
        userProfile={userProfile}
        type="game"
        handleAddMedia={handleAddMedia}
        handleRemoveMedia={handleRemoveMedia}
      />
    
    </>
  );
}
 
export default GameCard;