import React from 'react' 
import MediaForm from '../MediaForm/MediaForm'
// import moment from 'moment'

const TopGameCard = ({ game }) => {
  return (
    <>
      <div>
        <img src={game.box_art_url} alt={game.name}/>
        <h1>{game.name}</h1>
      </div>
    
    </>
  );
}
 
export default TopGameCard;