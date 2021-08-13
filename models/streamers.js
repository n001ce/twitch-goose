import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Streamer
}

const gameSchema = new Schema({
  broadcaster_id: Number,
  broadcaster_name: String,
  profile_image_url: String,
  game_name: String,
  game_id: String,
  game_photo: String,
  broadcaster_language: String,
  clipId : String,
  bio: String,
  followers: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  reviews: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
},{
  timestamps: true,
});

const Streamer = mongoose.model("Streamer", gameSchema);