require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users/usersRouter');
const petRoutes = require('./routes/pets/petsRouter');
const postRoutes = require('./routes/posts/postsRouter');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/posts', postRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'No such endpoint' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
