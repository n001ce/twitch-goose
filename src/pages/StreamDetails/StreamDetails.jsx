import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'


class StreamDetails extends Component {
  state = {
    searchResult: {}
  }

  async componentDidMount() {
    const searchResult = await mediaAPI.searchOneStream(this.props.match.params.id)
    this.setState({searchResult : searchResult.data})
  }

  render() {
    const { searchResult } = this.state 
    return (
      <>
        <h1>{searchResult.user_name}</h1>
        <h3>{searchResult?.game_name}</h3>
        <img src={searchResult.thumbnail_url} alt="backdrop" /><br></br>
        <p>{searchResult.title}</p>
        <h4>Viewers: {searchResult.viewer_count}</h4>
        <h4>Started At: {searchResult.started_at}</h4>
        <h4>Language:  {searchResult?.language}</h4>
        <h3>Mature? : {searchResult.is_mature}</h3>
      </>
    );
  }
}
 
export default StreamDetails;