const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const replysRouter = require('./routes/replys');
const loginRouter = require('./login');

app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/replys', replysRouter);
app.use('/user', loginRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});