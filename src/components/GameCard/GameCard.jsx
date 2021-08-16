import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia }) => {
  return (
    <>
      <div>
        <img src={game.box_art_url} alt={game.name}/>
        <h1>{game.name}</h1>
        <MediaForm
          media={game}
          userProfile={userProfile}
          type="game"
          handleAddMedia={handleAddMedia}
          handleRemoveMedia={handleRemoveMedia}
        />
      </div>
    
    </>
  );
}
 
export default GameCard;