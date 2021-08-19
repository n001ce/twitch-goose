import { Review } from "../models/review.js"
import { Media } from '../models/media.js'
import {Profile} from '../models/profile.js'

export {
  create,
  deleteReview as delete
}

function deleteReview(req, res) {
  Review.findByIdAndDelete(req.params.id)
  .then(review => {
    res.json(review)
  })
}

function create(req, res) {
  const autherId=req.body.author
  const mediaId=req.body.media
  // console.log(req.body)
  // console.log(autherId)
  // console.log(mediaId)
  // Profile.findById(autherId)

  Review.create({rating:req.body.rating, mediaId:mediaId, author: {_id:req.body.author}})
  .then(review => {
    review.populate('author').populate('media').execPopulate()
    .then(()=> {
      res.json(review)
    })
  })
}
