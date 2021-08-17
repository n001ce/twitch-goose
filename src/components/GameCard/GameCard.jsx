import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia }) => {
  return (
    <>
      <div>
      <a href={`/games/${game.id}`}>
        <h1>{game.name}</h1>
        <MediaForm
          media={game}
          userProfile={userProfile}
          type="game"
          handleAddMedia={handleAddMedia}
          handleRemoveMedia={handleRemoveMedia}
        />
        </a>
      </div>
    
    </>
  );
}
 
export default GameCard;