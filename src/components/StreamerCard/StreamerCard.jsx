import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box } from '@material-ui/core';

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

const StreamerCard = ({ stream, userProfile, handleAddMedia, handleRemoveMedia}) => {
  const classes = useStyles();

  return (
    <>
      <div>
      <Box m={3} className={classes.cardContainer} >
      <a href={`/streams/${stream.broadcaster_login}/${stream.id}`} className={classes.title}>
      <img className='imgStream' src={stream.thumbnail_url} alt={stream.name} width="220"/>
      <Typography variant="h5"  >{stream.display_name}</Typography>
      </a>
      {userProfile ? 
      <MediaForm
        media={stream}
        userProfile={userProfile}
        type="stream"
        handleAddMedia={handleAddMedia}
        handleRemoveMedia={handleRemoveMedia}
      /> : <div></div>
      
    }

      </Box>
          </div>

    </>
  );
}
 
export default StreamerCard;