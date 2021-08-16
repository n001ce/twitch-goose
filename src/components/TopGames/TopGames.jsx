import React, { Component } from 'react'
import GameCard from '../GameCard/GameCard'
import * as mediaAPI from '../../services/mediaService'


class TopGames extends Component {
  state = {
    gameResult: []
  }

  async componentDidMount() {
    const gameResult = await mediaAPI.topGames()
    this.setState({gameResult})
  }

  render() { 
    return (
      <>
        <h1>Game Results</h1>
        {this.state.gameResult.map(game =>
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

export default TopGames