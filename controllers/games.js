import axios from "axios"
import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'

export {
  index,
  addGame,
  removeGame,
}

const headers={
  'Authorization' : `Bearer ${process.env.ACCESS_TOKEN}`
}

function addGame (req, res) {
  
}

function removeGame(req, res) {

}



function index(req, res) {
  axios.get(`https://api.twitch.tv/helix/games/top`, {headers})
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}