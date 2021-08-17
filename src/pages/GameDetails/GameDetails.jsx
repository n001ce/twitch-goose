import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import StreamerCard from '../../components/StreamerCard/StreamerCard';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography} from '@material-ui/core';

class StreamDetails extends Component {
  state = {
    searchResult: {},
    streamerResult: {}
  }
  
  
  async componentDidMount() {
    const searchResult = await mediaAPI.searchOneGame(this.props.match.params.id)
    const streamerResult = await mediaAPI.searchStreams(searchResult[0].name)
    this.setState({searchResult, streamerResult : streamerResult.data})
    
  }
  
  render() { 
    return (
      <>
        <h1>Movie Results</h1>
      </>  
    );
  }
}
 
 
export default StreamDetails;