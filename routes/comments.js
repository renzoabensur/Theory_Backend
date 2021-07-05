const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/').get((req, res) => {
  Comment.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const comment = req.body.comment;
  const post_title = req.body.post_title;
  const post_id = req.body.post_id;
  const votes = req.body.votes;

  const newComment = new Comment({
    username,
    comment,
    post_title,
    post_id,
    votes
  });

  newComment.save()
  .then(() => res.json('Comment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Comment.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Comment.findById(req.params.id)
    .then(post => {
      post.username = req.body.username;
      post.comment = req.body.comment;
      post.post_title = req.body.post_title;
      post.post_id = req.body.post_id;
      post.votes = req.body.votes;
    

      post.save()
        .then(() => res.json('Comment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;