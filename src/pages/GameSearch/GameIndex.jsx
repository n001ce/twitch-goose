import React, { Component } from 'react'
import * as mediaAPI from '../../services/mediaService'
import GameCard from '../../components/GameCard/GameCard'

class GameIndex extends Component {
  state = {
    searchResults: []
  }

  async componentDidMount() {
    const { params } = this.props.match
    const searchResults = await mediaAPI.search("game", params.query)
    this.setState({ searchResults: searchResults })
  }

  async componentDidUpdate(prevProps) {
    const { params } = this.props.match
    if (params.query !== prevProps.match.params.query){
        const searchResults = await mediaAPI.search("game", params.query)
        this.setState({ searchResults: searchResults })
      }
  }

  render() { 
    return (
      <>
        <h1>Game Results</h1>
        {this.state?.searchResults?.map(game =>
          <GameCard
          game={game}
          key={game.id}
          userProfile={this.props.userProfile}
        />
        )} 
      </>  
    );
  }
}
 
export default GameIndex;