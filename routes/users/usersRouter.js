const router = require('express').Router();
const shortid = require('shortid');

const users = [];

router.get('/', async (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = shortid();

  users.push(newUser);

  res.json(newUser);
});

module.exports = router;
