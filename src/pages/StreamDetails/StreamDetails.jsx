import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'


class StreamDetails extends Component {
  state = {
    searchResult: []
  }

  async componentDidMount() {
    const { params } = this.props.match
    console.log(params)
    const searchResult = await mediaAPI.searchStreams(params.query)
    this.setState({searchResult : searchResult.data.filter(data => data.broadcaster_login === params.query)})
  }

  render() {
    const { searchResult } = this.state
    return (
      <>
      {searchResult.map(stream =>
        <>
        <img className='img-responsive' src={stream.thumbnail_url} alt={stream.name}/>
        <h1>{stream.broadcaster_login}</h1>
        <h1>{stream.broadcaster_language}</h1>
        <h1>{stream.game_name}</h1>
        <h1>{stream.is_live ? "yes" : "no"}</h1>
        <h1>{stream.title}</h1>
        <h1>{stream.started_at}</h1>
        </>
      )}
      </>
    );
  }
}
 
export default StreamDetails;