import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import {List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


class TopStreamsIndex extends Component {
  state = {
    searchResult: []
  }

  async componentDidMount() {
    const searchResult = await mediaAPI.topStreams()
    this.setState({searchResult})
  }

  render() {
    // const { searchResult } = this.state 
    console.log(this.state.searchResult)

    return (
      <>
      <List>
      {this.state.searchResult?.map(streamer=>
      <ListItem button key={1}>
        <ListItemIcon><AccountCircle/></ListItemIcon>
        
        <ListItemText primary={streamer.user_name}/>
      </ListItem>
        )}
      </List>
        {/* <h1>{searchResult.name}</h1> */}
      </>
    );
  }
}
 
export default TopStreamsIndex;