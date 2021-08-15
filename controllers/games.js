import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'
import { Streamer } from '../models/streamer.js'
import api from '../config/api.js'

export {
  index,
  addMedia,
  search,
  getClip
}



function addMedia(req, res) {
  
}

function getClip(req,res){
  
}

function search(req, res) {
  api.get(`https://api.twitch.tv/helix/${req.params.type}?name=${req.params.query}`)
  .then(response => {
    console.log(response)
    res.json(response.data.data)
  })
}



function index(req, res) {
  api.get(`https://api.twitch.tv/helix/${req.params.type}`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}