const router = require('express').Router();
let Reply = require('../models/reply.model');

router.route('/').get((req, res) => {
  Reply.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const reply = req.body.reply;
  const comment_id = req.body.comment_id;
  const votes = req.body.votes;

  const newReply = new Reply({
    username,
    reply,
    comment_id,
    votes
  });

  newReply.save()
  .then(() => res.json('Reply added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Reply.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Reply.findByIdAndDelete(req.params.id)
    .then(() => res.json('Reply deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Reply.findById(req.params.id)
    .then(post => {
      post.username = req.body.username;
      post.reply = req.body.reply;
      post.comment_id = req.body.comment_id;
      post.votes = req.body.votes;

      post.save()
        .then(() => res.json('Reply updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;