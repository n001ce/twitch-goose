import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'


class TopStreamsIndex extends Component {
  state = {
    searchResult: {}
  }

  async componentDidMount() {
    const searchResult = await mediaAPI.topStreams()
    this.setState({searchResult})
  }

  render() {
    const { searchResult } = this.state 
    return (
      <>
        <h1>{searchResult.name}</h1>
      </>
    );
  }
}
 
export default TopStreamsIndex;