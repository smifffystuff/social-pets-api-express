const router = require('express').Router();
const shortid = require('shortid');

const pets = [];

router.get('/', async (req, res) => {
  res.json(pets);
});

router.post('/', (req, res) => {
  const newPet = req.body;
  newPet.id = shortid();

  pets.push(newPet);

  res.json(newPet);
});

module.exports = router;
