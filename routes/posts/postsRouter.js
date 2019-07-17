const router = require('express').Router();
const shortid = require('shortid');

const posts = [];

router.get('/', async (req, res) => {
  res.json(posts);
});

router.post('/', (req, res) => {
  const newPost = req.body;
  newPost.id = shortid();

  posts.push(newPost);

  res.json(newPost);
});

module.exports = router;
