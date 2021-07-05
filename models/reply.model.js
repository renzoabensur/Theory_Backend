
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const replySchema = new Schema({
  username: { type: String, required: true },
  reply: { type: String, required: true },
  comment_id: { type: String, required: true},
  votes: { type: Number, required: false}
}, {
  timestamps: true,
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;