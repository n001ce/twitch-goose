import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'


class GameDetails extends Component {
  state = {
    searchResult: {}
  }

  async componentDidMount() {
    const {params} = this.props.match
    const searchResult = await mediaAPI.searchOneGame(this.props.match.params.id)
    this.setState({searchResult})
    console.log(searchResult)
  }

  render() {
    const { searchResult } = this.state 
    return (
      <>
        <h1>{searchResult.name}</h1>
        <h4>Active Streams</h4>
        
      </>
    );
  }
}
 
export default GameDetails;