import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.dev.config';

const app = express();
const compiler = webpack(config);
app.use(express.static('public'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.port || 3000, (err) => {
  if (err) {
    console.log(err)
    return;
  }

  console.log('Visit devServer: http://localhost:3000');
});
