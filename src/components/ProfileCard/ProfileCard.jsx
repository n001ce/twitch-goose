import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Avatar, Card, CardActionArea, Box, List, CssBaseline, Typography, Divider, IconButton, MenuIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

const ProfileCard = ({ profile, userProfile, handleAddFriend, handleRemoveFriend }) => {
  const classes = useStyles();

  return (
    <>
    <Box m={3} >
    <Card className={classes.root} >
      <Box m={5} >
    <CardActionArea>
    <Avatar className={classes.avatar} alt="User Avatar" src={userProfile.avatar} variant="rounded"/>
      <Link
        to={{
          pathname: '/profile',
          state: {profile}
        }}
      >
        <h4>{profile.name}</h4>

      </Link>
    </CardActionArea>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleAddFriend(profile._id)}>Befriend {profile.name}</button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <button onClick={() => handleRemoveFriend(profile._id)}>Defriend {profile.name}</button> 
      }   
      </Box>
    </Card>
    </Box>
    </>
  );
}
 
export default ProfileCard;
