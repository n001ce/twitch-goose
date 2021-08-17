import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import StreamerCard from '../../components/StreamerCard/StreamerCard';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Typography} from '@material-ui/core';

class GameDetails extends Component {
  state = {
    searchResult: [],
    streamerResult: {}
  }
  
  
  async componentDidMount() {
    const searchResult = await mediaAPI.searchOneGame(this.props.match.params.id)
    const streamerResult = await mediaAPI.searchStreams(searchResult[0].name)
    this.setState({searchResult: searchResult[0], streamerResult : streamerResult.data})
    
  }
  
  render() { 
    const {searchResult} = this.state
    return (
      <>
        <h1>{searchResult.name}</h1>
        
      </>  
    );
  }
}
 
 
export default GameDetails;