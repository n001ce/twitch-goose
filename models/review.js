import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  review
}

const reviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5},
  content: String,
  streamer: { type: Schema.Types.ObjectId, ref: "Streamer" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
},{
  timestamps: true,
})

const review = mongoose.model("Review", reviewSchema)