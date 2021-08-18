import { Review } from "../models/review.js"
import { Media } from '../models/media.js'

export {
  create
}

function create(req, res) {
    // Add author/game info to req.body (for when we use model.create)
    req.body.author = req.user.profile._id
    req.body.game = req.params.id
    // Create the review
    Review.create(req.body)
    .then(review => {
      // Add the review reference to the Streamer
      Media.findById(req.params.id)
      .then(media => {
        media.reviews.push(review._id)
        media.save()
        .then(() => {
          res.redirect(`/streams/${media.title.toLowerCase()}`)
        })
      })
    })
  }