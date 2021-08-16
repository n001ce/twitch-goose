import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import GameCard from '../../components/GameCard/GameCard'
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography} from '@material-ui/core';


class GameSearch extends Component {
  state = {
    searchResults: []
  }

  
    
  

  async componentDidMount() {
    const { params } = this.props.match
    const searchResults = await mediaAPI.searchGames( params.query)
    this.setState({ searchResults })
  }

  async componentDidUpdate(prevProps) {
    const { params } = this.props.match
    if (params.query !== prevProps.match.params.query){
        const searchResults = await mediaAPI.searchGames(params.query)
        this.setState({ searchResults })
      }
  }




  render() { 
    return (
      <>
      <MyProfileBar userProfile={this.props.userProfile} />
      <Box ml={35} mr={5} my={3}>
      <Typography variant={'h4'} >Game Results</Typography>
      <Box my={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
          {this.state.searchResults.map(game => 
          <GameCard
          game={game}
          key={game.id}
          userProfile={this.props.userProfile}
          handleAddMedia={this.props.handleAddMedia}
          handleRemoveMedia={this.props.handleRemoveMedia}
          />
        )} 
        </Grid>
        </Grid>
        </Box>
        </Box>
      </>  
    );
  }
}
 
export default GameSearch;