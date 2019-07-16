require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/users/usersRouter');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
