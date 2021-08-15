import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Avatar, Card, CardActionArea, Box, List, CssBaseline, Typography, Divider, IconButton, MenuIcon, Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
  cardContainer:{
    width:'220px',
    margin:'auto',
    textAlign:'center',
  },
  avatar:{
    margin:'auto',
  },
  buttons:{
    fontSize:'13px',
    margin:'5px',
  }
}));

const ProfileCard = ({ profile, userProfile, handleAddFriend, handleRemoveFriend }) => {
  const classes = useStyles();

  return (
    <>
    <Box m={3} className={classes.cardContainer} justifyContent={'center'}>
    <Card className={classes.root} >
      <Box m={1} pt={2}>
    <Avatar className={classes.avatar} alt="User Avatar" src={userProfile.avatar} variant="rounded"/>

        <h4>{profile.name}</h4>
      <Divider/>
      <Box m={1} >
      <Button className={classes.buttons} size="small" variant="contained" color="secondary" component={Link} to={{
          pathname: '/profile',
          state: {profile}
        }}>Details</Button>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <Button className={classes.buttons} size="small" variant="contained" color="secondary" startIcon={<PersonAddIcon />} onClick={() => handleAddFriend(profile._id)}> {profile.name}</Button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <Button className={classes.buttons} size="small" variant="contained" color="secondary" startIcon={<RemoveCircleIcon />}onClick={() => handleRemoveFriend(profile._id)}> {profile.name}</Button> 
      }   
      </Box>
      </Box>
    </Card>
    </Box>
    </>
  );
}
 
export default ProfileCard;
