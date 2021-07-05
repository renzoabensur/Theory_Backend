const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const user_account_id = req.body.user_account_id;
  const title = req.body.title;
  const description = req.body.description;
  const topic_id = req.body.topic_id;
  const thread_id = req.body.thread_id;
  const votes = req.body.votes;

  const newPost = new Post({
    username,
    user_account_id,
    title,
    description,
    topic_id,   
    thread_id,
    votes
  });

  newPost.save()
  .then(() => res.json('Post added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.username = req.body.username;
      post.user_account_id = req.body.user_account_id;
      post.title = req.body.title;
      post.description = req.body.description;
      post.topic_id = req.body.topic_id;
      post.thread_id = req.body.thread_id;
      post.votes = req.body.votes;

      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;