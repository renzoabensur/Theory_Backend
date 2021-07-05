
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  user_account_id : {type: Number, required: true} ,
  title: { type: String, required: true },
  description: { type: String, required: true },
  topic_id: { type: String, required: true},
  thread_id : { type: String, required: true},
  votes: {type: Number, required: false}
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;