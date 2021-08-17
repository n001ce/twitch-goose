import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';

class TopStreamsIndex extends Component {
  state = {
    searchResult: []
  }

  async componentDidMount() {
    const searchResult = await mediaAPI.topStreams()
    this.setState({searchResult})
  }

  render() {
    console.log(this.state.searchResult)

    return (
      <>
      <List>
      {this.state.searchResult?.map(streamer=>
      <ListItem button key={streamer.id}>
        <ListItemIcon><BadgeAvatar url={streamer.thumbnail_url} live={streamer.type} name={streamer.user_name}/></ListItemIcon>
        <ListItemText primary={streamer.user_name}/>
      </ListItem>
        )}
      </List>
      </>
    );
  }
}
 
export default TopStreamsIndex;