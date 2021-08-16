import React, { Component } from 'react'
import GameCard from '../GameCard/GameCard'
import * as mediaAPI from '../../services/mediaService'
import {Box, Grid, Typography} from '@material-ui/core';



class TopGames extends Component {
  state = {
    gameResult: []
  }

  async componentDidMount() {
    const gameResult = await mediaAPI.topGames()
    this.setState({gameResult})
  }

  render() { 
    return (
      <>
        <Box my={3}>
        <Grid container spacing={3}>
        {this.state.gameResult.map(game =>
         <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
          <GameCard
          game={game}
          key={game.id}
          userProfile={this.props.userProfile}
        />
         </Grid>
        )} 
        </Grid>
      </Box>
      </>  
    );
  }
}

export default TopGames