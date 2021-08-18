import React, { Component } from 'react'
import TopGames from '../../components/TopGames/TopGames'
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar';
import {Box, Grid, Typography, Divider } from '@material-ui/core';

const TopGamesPage = ({ location, userProfile }) => {
  
    return (
<>
<MyProfileBar userProfile={userProfile} />
        <Box ml={35} mr={5} my={3}>
        <Typography variant={'h4'} >Top Games</Typography>
        <TopGames />
        </Box>


</>
  );
}
 
export default TopGamesPage;