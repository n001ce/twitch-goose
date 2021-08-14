import React, { Component } from 'react'
import * as gameAPI from '../../services/gameService'
// import GameCard from '../../components/GameCard/GameCard'

class GameIndex extends Component {
  state = {
    searchResults: []
  }

  async componentDidMount() {
    const { params } = this.props.match
    const searchResults = await gameAPI.search(params.query)
    this.setState({ searchResults: searchResults.results })
    console.log(searchResults.results)
  }

  async componentDidUpdate(prevProps) {
    const { params } = this.props.match
    if (params.query !== prevProps.match.params.query){
        const searchResults = await gameAPI.search(params.query)
        this.setState({ searchResults: searchResults.results })
      }
  }

  render() { 
    return (
      <>
        <h1>Game Results</h1>
        {/* {this.state.searchResults.map(game =>
        //   <GameCard
        //   movie={game}
        //   key={game.id}
        //   userProfile={this.props.userProfile}
        //   handleAddMedia={this.props.handleAddMedia}
        //   handleRemoveMedia={this.props.handleRemoveMedia}
        // />
        )} */}
      </>  
    );
  }
}
 
export default GameIndex;