import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import StreamerCard from '../../components/StreamerCard/StreamerCard';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography} from '@material-ui/core';

class StreamDetails extends Component {
  state = {
    searchResult: {}
  }
  
  
  async componentDidMount() {
    
    const searchResult = await mediaAPI.searchOneGame(this.props.match.params.id)
    this.setState({searchResult})
    
  }
  
  render() {
    const { searchResult } = this.state 
    
        return (
      <>
      <MyProfileBar userProfile={this.props.userProfile} />
      <Box ml={35} mr={5} my={3}>
      <Typography variant={'h4'} >All Streamers for {searchResult.name}</Typography>
      <Box my={3}>
      <Grid container spacing={3}>
      <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
       
          
          <StreamerCard
          game={searchResult[0]}
          key={'1'}
          userProfile={this.props.userProfile}
          handleAddMedia={this.props.handleAddMedia}
          handleRemoveMedia={this.props.handleRemoveMedia}
          />
         
      </Grid>
      </Grid>
      </Box>
      </Box>
      </>  
    );
  }
}
 
export default StreamDetails;