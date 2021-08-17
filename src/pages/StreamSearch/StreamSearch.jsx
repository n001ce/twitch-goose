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
    this.setState({ streamResults })
  }

  async componentDidUpdate(prevProps) {
    const { params } = this.props.match
    if (params.query !== prevProps.match.params.query){
        const streamResults = await mediaAPI.searchStreams(params.query)
        this.setState({ streamResults })
      }
  }

  render() { 
    return (
      <>
      <h4> Stream Results </h4>
          
      </>  
    );
  }
}
 
export default StreamSearch;