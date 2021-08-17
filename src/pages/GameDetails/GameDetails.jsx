import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import StreamerCard from '../../components/StreamerCard/StreamerCard';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography} from '@material-ui/core';

class GameDetails extends Component {
  state = {
    searchResult: [],
    streamerResult: []
  }
  
  
  async componentDidMount() {
    const searchResult = await mediaAPI.searchOneGame(this.props.match.params.id)
    const streamerResult = await mediaAPI.searchStreams(searchResult[0].name)
    this.setState({searchResult: searchResult[0], streamerResult : streamerResult.data})
    
  }
  
  render() { 
    const {searchResult, streamerResult} = this.state
    return (
      <>
        <h1>{searchResult.name}</h1>
        <Box my={3}>
        <Grid container spacing={3}>
        {streamerResult.map(stream =>
         <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
          <StreamerCard
          stream={stream}
          key={stream.id}
          userProfile={this.props.userProfile}
          handleAddMedia={this.props.handleAddMedia}
          handleRemoveMedia={this.props.handleRemoveMedia}
        />
         </Grid>
        )} 
        </Grid>
      </Box>
      </>  
    );
  }
}
 
 
export default GameDetails;