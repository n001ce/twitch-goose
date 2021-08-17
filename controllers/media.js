import { Profile } from '../models/profile.js'
import { Media } from '../models/media.js'


import api from '../config/api.js'

export {
  topGames,
  topStreams,
  addMedia,
  searchGames,
  searchOneGame,
  searchStreams,
  searchOneStream,
  removeMedia,
}

function addMedia (req, res) {
  req.body.collectedBy = req.user.profile
  Profile.findById(req.user.profile)
  .then(profile => {
    Media.findOne({api_id: req.body.api_id})
    .then(media =>  {
      if (media) {
        media.collectedBy.push(req.user.profile)
        media.save()
        .then(media => {
          profile.media.push(media._id)
          profile.save()
          profile.populate('media').populate('friends').execPopulate()
          .then((profile) => {
            res.json(profile)
          })
        })
      } else {
        Media.create(req.body)
        .then(media => {
          profile.media.push(media._id)
          profile.save()
          profile.populate('media').populate('friends').execPopulate()
          .then((profile) => {
            res.json(profile)
          })
        })
      }
    })
  })
}

function removeMedia(req, res) {
  Media.findOne({ api_id: req.params.id })
  .then(media => {
    media.collectedBy.remove({ _id: req.user.profile })
    media.save()
    .then(() => {
      Profile.findById(req.user.profile)
      .then(profile => {
        let mediaIdx = profile.media.findIndex(media => media.id === req.body.api_id)
        profile.media.splice(mediaIdx, 1)
        profile.save()
        profile.populate('media').populate('friends').execPopulate()
        .then(()=> res.json(profile))
      })
    })
  })
}

function topGames(req, res){
  api.get(`https://api.twitch.tv/helix/games/top`)
  .then(response => {
    res.json(response.data.data)
  })
}
function topStreams(req, res){
  api.get(`https://api.twitch.tv/helix/streams`)
  .then(response => {
    res.json(response.data.data)
  })
}


function searchGames(req, res) {
  api.get(`https://api.twitch.tv/helix/search/categories?query=${req.params.query}`)
  .then(response => {
    res.json(response.data.data)
  })
}

function searchOneGame(req, res) {
  api.get(`https://api.twitch.tv/helix/games?id=${req.params.id}`)
  .then(response => {
    res.json(response.data.data)
  })
}

function searchOneStream(req, res) {
  api.get(`https://api.twitch.tv/helix/streams?user_id=${req.params.id}`)
  .then(response =>{
    console.log(response.data)
    res.json(response.data)
  })
}

function searchStreams(req, res){
    api.get(`https://api.twitch.tv/helix/search/channels?query=${req.params.query}`)
    .then(response =>{
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
