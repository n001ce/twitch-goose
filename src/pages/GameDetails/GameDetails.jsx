import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'


class GameDetails extends Component {
  state = {
    searchResult: {}
  }

  async componentDidMount() {
    const searchResult = await mediaAPI.searchGames('game', this.props.match.params.id)
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
 
export default GameDetails;