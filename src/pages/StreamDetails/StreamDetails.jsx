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
    
    const searchResult = await mediaAPI.searchOneStream(this.props.match.params.id)
    this.setState({searchResult})
    
  }
  
  render() {
      const {searchResult} = this.state 
      return (
          <>
      <Box my={3}>
        <Grid container spacing={3}>
        {this.state.searchResults.map(stream =>
         <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
          <StreamerCard
          stream={stream}
          key={stream.id}
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
 
export default StreamDetails;