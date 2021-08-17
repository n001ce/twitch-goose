import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import StreamerCard from '../../components/StreamerCard/StreamerCard'
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography} from '@material-ui/core';


class StreamSearch extends Component {
  state = {
    streamResults: []
  }

  async componentDidMount() {
    const { params } = this.props.match
    const streamResults = await mediaAPI.searchStreams(params.query)
    this.setState({ streamResults : streamResults.data })
  }

  async componentDidUpdate(prevProps) {
    const { params } = this.props.match
    if (params.query !== prevProps.match.params.query){
        const streamResults = await mediaAPI.searchStreams(params.query)
        this.setState({ streamResults: streamResults.data })
      }
  }

  render() { 
    return (
      <>
      <Box my={3}>
        <Grid container spacing={3}>
        {this.state.streamResults.map(stream =>
         <Grid item xs={12} s={6} md={4} lg={3} mx={'auto'} >
          <StreamerCard
          stream={stream}
          key={stream.user_id}
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
 
export default StreamSearch;