import { Review } from "../models/review.js"
import { Media } from '../models/media.js'

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
  req.body.author = req.user.profile._id
  req.body.media = req.params.id
  Review.create(req.body)
  .then(review => {
    review.populate('author').populate('media').execPopulate()
    .then(()=> {
      res.json(review)
    })
  })
}
