import React, { Component } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'
import ReactPlayer from 'react-player'
import {Box, Grid, Card, Typography, Divider,Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class Signup extends Component {
  state = {
    message: '',
  }

  updateMessage = msg => {
    this.setState({ message: msg })
  }

  render() {
    return (
      <>
        <Box mr={5} my={3} p={5}className={styles.root}>
        {/* <Card className={styles.cardContainer} > */}

        <Typography variant={'h4'} color={'primary'}>SIGN UP</Typography>
        <Typography variant={'p'} color={'primary'}>{this.state.message}</Typography>

        <Box mr={5} my={3} >
        <Divider/>
        </Box>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        {/* </Card> */}
        </Box>
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= '/images/others/game3.mp4'
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
}

export default Signup
