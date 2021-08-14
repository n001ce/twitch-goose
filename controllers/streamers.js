import axios from "axios"
import { Profile } from '../models/profile.js'
import { Streamer } from '../models/streamer.js'

export {
  index,
  addStreamer,
  removeStreamer,
  search,

}

const headers={
  'Authorization' : `Bearer ${process.env.ACCESS_TOKEN}`,
  'Client-Id' : process.env.CLIENT_ID
}

function addStreamer(req, res) {
    req.body.collected_by = req.user.profile
    Profile.findById(req.user.profile)
    .then(profile => {
      Streamer.findOne({api_id: req.body.api_id})
      .then(streamer =>  {
        if (streamer) {
          streamer.collected_by.push(req.user.profile)
          streamer.save()
          .then(streamer => {
            profile.streamer.push(streamer._id)
            profile.save()
            profile.populate('streamers').populate('games').populate('friends').execPopulate()
            .then((profile) => {
              res.json(profile)
            })
          })
        } else {
          Streamer.create(req.body)
          .then(streamer => {
            profile.streamer.push(streamer._id)
            profile.save()
            profile.populate('streamers').populate('games').populate('friends').execPopulate()
            .then((profile) => {
              res.json(profile)
            })
          })
        }
      })
    })
  }

function removeStreamer(req, res) {
    Streamer.findOne({ api_id: req.params.id })
  .then(streamer => {
    streamer.collected_by.remove({ _id: req.user.profile })
    streamer.save()
    .then(() => {
      Profile.findById(req.user.profile)
      .then(profile => {
        let streamerIdx = profile.media.findIndex(streamer => streamer.id === req.body.api_id)
        profile.streamer.splice(streamerIdx, 1)
        profile.save()
        profile.populate('streamers').populate('games').populate('friends').execPopulate()
        .then(()=> res.json(profile))
      })
    })
  })
}

function search(req, res) {
  axios.get(`https://api.twitch.tv/helix/helix/search/channels/${req.params.query}`, {headers})
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}

function index(req, res) {
  axios.get(`https://api.twitch.tv/helix/streams`, {headers})
  .then(response => {
    console.log(response.data)
    res.json(response.data)
  })
}