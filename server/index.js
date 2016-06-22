import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import path from 'path';

import instagramRouter from './instagram_router';
import flickrRouter from './flickr_router';

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
