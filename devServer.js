import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.dev.config';
import flickrRouter from './server/flickr_router';

const app = express();
const compiler = webpack(config);
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api', flickrRouter);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.port || 7788, (err) => {
  if (err) {
    console.log(err)
    return;
  }

  console.log('Visit devServer: http://localhost:7788');
});
