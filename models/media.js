import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Media
}

const mediaSchema = new Schema({
  api_id: Number,
  title: String, 
  img_url: String,
  type: String,
  collectedBy: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  reviews: [{type: Schema.Types.ObjectId, ref: "Review"}]
},{
  timestamps: true,
});

const Media = mongoose.model("Media", mediaSchema);