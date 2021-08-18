import React from 'react' 
import MediaForm from '../MediaForm/MediaForm'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Card, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration:'none',
    color:theme.palette.secondary.dark,
  },
  cardContainer:{
    width:'200px',
    margin:'auto',
    textAlign:'center',
  },
  root:{
    margin:'5px',
    padding:'5px',
    height:'260px',
  },
  image:{
    width:'180px',
  }
}));

const UserStreamCard = ({ media, userProfile, handleAddMedia, handleRemoveMedia}) => {
  const newUrl = media.img_url?.replace('52x72','200x300')
  const classes = useStyles(); 

  return (
    <>
      <div>
      <Box m={3} className={classes.cardContainer} justifyContent={'center'}>
      <Card className={classes.root} >
      <a href={`/streams/${media.title.toLowerCase()}`} className={classes.title}>
      <img className={classes.image} src={newUrl} alt={media.title}/>
      <Typography variant="h5" flex-wrap>{media.title}</Typography>
      </a>
       {userProfile ? 
      <MediaForm
        media={media}
        userProfile={userProfile}
        type="stream"
        handleAddMedia={handleAddMedia}
        handleRemoveMedia={handleRemoveMedia}
      /> : <div></div>
    } 
    </Card> : 
  
    </Box>
          </div>

    </>
  );
}
 
export default UserStreamCard;