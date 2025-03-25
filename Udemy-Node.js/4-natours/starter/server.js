const mongoose = require('mongoose');
const dotenv = require('dotenv');
const emoji = require('./utils/emoji');

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log(
    `UNCAUGHT EXCEPTION ${emoji.redX}${emoji.siren}- SHUTTING DOWN ${emoji.exclaim2}`
  );
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const database = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Connect to MongoDB database
mongoose.connect(database).then(() => {
  console.log(`DB connection successful! ${emoji.greenCheck}`);
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}... ${emoji.greenCheck}`);
  console.log(
    `Node is running in a ${process.env.NODE_ENV} environment ${emoji.dev}`
  );
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log(
    `UNHANDLED REJECTION ${emoji.redX}${emoji.siren} - SHUTTING DOWN ${emoji.exclaim2}`
  );
  server.close(() => {
    process.exit(1);
  });
});
