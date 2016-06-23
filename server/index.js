const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');

const instagramRouter = require('./instagram_router');
const flickrRouter = require('./flickr_router');

const port = process.env.PORT || 7788;
const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('build'));

app.use('/api', flickrRouter);
app.use('/api', instagramRouter);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.listen(port, () => {
  console.log(`Listen at port: ${port}`);
});
