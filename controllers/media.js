import { Profile } from '../models/profile.js'
import { Game } from '../models/game.js'
import { Streamer } from '../models/streamer.js'
import api from '../config/api.js'

export {
  index,
  addMedia,
  searchGames,
  getClip,
  searchStreams,
}

function addMedia(req, res) {
  
}

function getClip(req,res){
  
}

function searchGames(req, res) {
  api.get(`https://api.twitch.tv/helix/search/categories?query=${req.params.query}`)
  .then(response => {
    res.json(response.data.data)
  })
}

function searchStreams(req, res){
    api.get(`https://api.twitch.tv/helix/search/channels?query=${req.params.query}`)
    .then(response =>{
      console.log(response.data)
      res.json(response.data)
    })
}



function index(req, res) {
  api.get(`https://api.twitch.tv/helix/${req.params.type}`)
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}

function getSchedule(req, res){
  api.get(`https://api.twitch.tv/helix/schedule?broadcaster_id=${req.params.id}`)
  .then(response=>{
    console.log(response.data)
    res.json(response.data)
  })
}