import axios from "axios"
import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'
import api from '../config/api.js'

export {
  index,
  addGame,
  search,
  getClip
}



function addGame (req, res) {
  
}

function getClip(req,res){
  api.get(`https://api.twitch.tv/helix/games?name=${req.params}`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}

function search(req, res) {
  api.get(`https://api.twitch.tv/helix/games?name=${req.params.query}`)
  .then(response => {
    res.json(response.data.data)
  })
}



function index(req, res) {
  api.get(`https://api.twitch.tv/helix/games/top`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}