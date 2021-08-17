import React from 'react' 
import MediaForm from '../../components/MediaForm/MediaForm'
// import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import {Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration:'none',
    color:theme.palette.secondary.dark,
  },
}));

const StreamerCard = ({ stream, userProfile, handleAddMedia, handleRemoveMedia}) => {
  const classes = useStyles();

  return (
    <>
      <div>
      <a href={`/streams/${stream.user_id}`} className={classes.title}>
      <img className='img-responsive' src={stream.thumbnail_url} alt={stream.name}/>
      <Typography variant="h5" >{stream.display_name}</Typography>
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
          </div>

    </>
  );
}
 
export default StreamerCard;