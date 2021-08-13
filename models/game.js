import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Game
}

const gameSchema = new Schema({
  game_id: Number,
  game_name: String,
  imageUrl: String,
  box_art_url: String,
  collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
},{
  timestamps: true,
});

const Game = mongoose.model("Game", gameSchema);