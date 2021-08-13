import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    games: [{type: mongoose.Schema.Types.ObjectId, ref: "Game"}],
    streamers: [{type: mongoose.Schema.Types.ObjectId, ref: "Streamer"}],
    reviews:[{type: mongoose.Schema.Types.ObjectId, ref: "Review"}],
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)
