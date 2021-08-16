import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'

const StreamerCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia }) => {
  
  return (
    <>
     <div>
     <h1>{game?.name}</h1>
     <img className='img-responsive' src={game?.box_art_url} alt={game?.name}/>
     </div>

    
    </>
  );
}

export default StreamerCard;