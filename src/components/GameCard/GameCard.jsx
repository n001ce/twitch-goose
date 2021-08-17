import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia}) => {
  const newUrl = game.box_art_url.replace('{width}','200').replace('{height}','300')
  return (
    <>
      <div>
        <img src={newUrl} alt={game.name}/>
        <h1>{game.name}</h1>
      </div>
      {userProfile ? 
      <MediaForm
        media={game}
        userProfile={userProfile}
        type="game"
        handleAddMedia={handleAddMedia}
        handleRemoveMedia={handleRemoveMedia}
      /> : <div></div>
      
    }
    
    </>
  );
}
 
export default GameCard;