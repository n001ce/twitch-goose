import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import StreamerCard from '../../components/StreamerCard/StreamerCard';
import MyProfileBar from '../../components/MyProfileBar/MyProfileBar'
import {Box, Grid, Divider, Typography} from '@material-ui/core';

class GameDetails extends Component {
  state = {
    searchResult: [],
    streamerResult: []
  }
  
  
  async componentDidMount() {
    const { params } = this.props.match
    if(params.page){
      const searchResult = await mediaAPI.searchOneGame(params.id)
      const streamerResult = await mediaAPI.searchRandomStreams(searchResult[0].name.toLowerCase(), params.page)
      this.setState({searchResult: searchResult[0], streamerResult: streamerResult.data})
    }else {
      const searchResult = await mediaAPI.searchOneGame(params.id)
      const streamerResult = await mediaAPI.searchStreams(searchResult[0].name)
      this.setState({searchResult: searchResult[0], streamerResult : streamerResult.data}) 
    }
  }
  
  render(){ 
    const {searchResult, streamerResult} = this.state
    const newUrl = searchResult.box_art_url?.replace('{width}','200').replace('{height}','300')
    
    return (
      <>
        <MyProfileBar userProfile={this.props.userProfile} />
        <Box ml={35} mr={5} my={3}>
        <Box m={2}>
        <h1>{searchResult.name}</h1>
        <img src={newUrl} alt={searchResult.name}/>
        </Box>
        <Divider/>
        <h3>Streamers Playing</h3>
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
        </Box>
      </>  
    );
  }
}
 
 
export default GameDetails;