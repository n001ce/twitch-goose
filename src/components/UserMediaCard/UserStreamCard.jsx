import React from 'react' 
import MediaForm from '../MediaForm/MediaForm'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Card, Box, Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
  },
  deleteBtn:{
    fontSize:'32px',
    display:'flex',
    "&:hover":{
        transition: '0.5s',
        transform: 'rotateZ(90deg)',
    }
  }
}));

const UserStreamCard = ({ media, userProfile, handleRemoveMedia, edit}) => {
  const newUrl = media.img_url?.replace('52x72','200x300')
  const classes = useStyles(); 

  return (
    <>
      <div>
      <Box m={3} className={classes.cardContainer} justifyContent={'center'}>
      {edit? <HighlightOffIcon color="error" className={classes.deleteBtn} onClick={() => handleRemoveMedia(media.api_id)}/> : <span></span>}
      <Card className={classes.root} >
      <a href={`/streams/${media.title.toLowerCase()}/${media.api_id}`} className={classes.title}>
      <img className={classes.image} src={newUrl} alt={media.title}/>
      <Typography variant="h5" flex-wrap>{media.title}</Typography>
      </a>
    </Card> 
  
    </Box>
          </div>

    </>
  );
}
 
export default UserStreamCard;