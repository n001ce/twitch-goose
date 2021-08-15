import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Avatar, Card, CardActionArea, Box, List, CssBaseline, Typography, Divider, IconButton, MenuIcon, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cardContainer:{
    width:'200px',
    margin:'auto',
    textAlign:'center',
  },
  avatar:{
    margin:'auto',
  }
}));

const ProfileCard = ({ profile, userProfile, handleAddFriend, handleRemoveFriend }) => {
  const classes = useStyles();

  return (
    <>
    <Box m={3} className={classes.cardContainer} justifyContent={'center'}>
    <Card className={classes.root} >
      <Box m={5} >
    <Avatar className={classes.avatar} alt="User Avatar" src={userProfile.avatar} variant="rounded"/>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h4>{profile.name}</h4>

      </Link>
      <Divider/>
      <Box m={1} >
      <Button variant="contained" color="secondary" component={Link} to={{
          pathname: '/profile',
          state: {profile}
        }}>Details</Button>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <Button variant="contained" color="secondary" onClick={() => handleAddFriend(profile._id)}>Befriend {profile.name}</Button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <Button variant="contained" color="secondary" onClick={() => handleRemoveFriend(profile._id)}>Defriend {profile.name}</Button> 
      }   
      </Box>
      </Box>
    </Card>
    </Box>
    </>
  );
}
 
export default ProfileCard;
