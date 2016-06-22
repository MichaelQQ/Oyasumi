import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
// import webpack from 'webpack';
// import config from '../webpack.dev.config';
import path from 'path';

import instagramRouter from './instagram_router';
import flickrRouter from './flickr_router';

process.chdir('../');
const port = process.env.PORT || 7788;
const app = express();

app.use(helmet());
app.use(bodyParser.json());

// const compiler = webpack(config);
app.use(express.static('public'));
app.use(express.static('build'));
// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath,
// }));

app.use('/api', flickrRouter);
app.use('/api', instagramRouter);

app.get('/*', (req, res) => res.sendFile(path.join(process.cwd(), 'index.html')));

app.listen(port, () => {
  console.log(`Listen at port: ${port}`);
});
