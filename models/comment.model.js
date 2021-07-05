
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  post_title: { type: String, required: true },
  post_id: { type: String, required: true},
  votes: { type: Number, required: false},
}, {
  timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;