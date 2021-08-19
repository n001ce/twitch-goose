import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'
import ReactPlayer from 'react-player'
import {Box, Grid, Card, Typography, Divider,Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    width:'400px',
    marginLeft:'-200px',
    marginTop:'25vh',
    textAlign:'center',
    left: '50%',
    position:'absolute',
    zIndex:'9999'
  },
  cardContainer:{
    backgroundColor:'rgba(255, 255, 255, 0.45)',
    padding:'30px',
  },
  
}));

const LoginPage = ({ history, handleSignupOrLogin }) => {
  const classes = useStyles();

    return (
      <>
        <Box mr={5} my={3} className={classes.root}>
        <Card  className={classes.cardContainer} >

        <Typography variant={'h4'} color={'primary'}>LOG IN</Typography>
        <Box mr={5} my={3} >
        <Divider/>
        </Box>
        <LoginForm history={history} handleSignupOrLogin={handleSignupOrLogin}/>
        </Card>
        </Box>

        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= '/images/others/game2.mp4'
            width='100%'
            height='100%'
            controls = {false}
            loop = {true}
            playing={true}
            />
        </div>



        


      </>
    )
}

export default LoginPage
