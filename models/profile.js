import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: {
      type: String,
      default: '/images/Account/user.svg'
    },
    bio: {
      type: String,
      default: 'Write something here..'
    },
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    media: [{type: mongoose.Schema.Types.ObjectId, ref: "Media"}],
    reviews:[{type: mongoose.Schema.Types.ObjectId, ref: "Review"}],
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)
