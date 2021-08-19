import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration:'none',
    color:theme.palette.secondary.dark,
  },
  cardContainer:{
    width:'220px',
    margin:'auto',
    wordWrap: 'break-word',
  },
}));

const GameCard = ({ game, userProfile, handleAddMedia, handleRemoveMedia}) => {
  const newUrl = game.box_art_url?.replace('{width}','200').replace('{height}','300').replace('52x72','200x300')
  const classes = useStyles();
console.log(game)
  return (
    <>
      <div>
      <Box m={3} className={classes.cardContainer} >
      <a href={`/games/${game.id}`} className={classes.title}>
      <img className='img-responsive' src={newUrl} alt={game.name}/>
      <Typography variant="h5" >{game.name}</Typography>
      </a>

      {userProfile ? 
      <MediaForm
        media={game}
        userProfile={userProfile}
        type="game"
        handleAddMedia={handleAddMedia}
        handleRemoveMedia={handleRemoveMedia}
      /> : <div></div>
      
    }
          </Box>
          </div>

    </>
  );
}
 
export default GameCard;