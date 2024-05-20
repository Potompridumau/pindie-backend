require('dotenv').config();
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('./middlewares/cors');
const connectToDatabase = require('./database/connect');
const cookieParser = require("cookie-parser");
const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages');

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

// Запуск приложения

app.listen(PORT);