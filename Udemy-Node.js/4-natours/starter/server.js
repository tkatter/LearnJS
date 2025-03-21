const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Connect to MongoDB database
mongoose.connect(database).then(() => {
  console.log('DB connection successful!');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
