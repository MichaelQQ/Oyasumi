import express from 'express';
import bodyParser from 'body-parser';
// import helmet from 'helmet';
import 'isomorphic-fetch';

const port = process.env.PORT || 7788;
const INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_ID;
const INSTAGRAM_REDIRECT_URI = 'http://localhost:7788/api/instagram/';
const app = express();

// app.use(helmet());
app.use(bodyParser.json());

const router = express.Router();

router.get('/flickr', (req, res) => {
  res.end('hi api!');
});
router.post('/flickr', (req, res) => {
  console.log('method:', req.body.method);
  console.log('value:', req.body.value);
  res.end('success');
});

let redirectDone = false;
router.get('/instagram', (req, res) => {
  if (redirectDone) {
    console.log(req);
    res.end('gogo rock');
  } else {
    redirectDone = true;
    res.redirect(`https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URI}&response_type=token`);
  }
});

app.use('/api', router);
app.listen(port);
console.log(`Listen at port: ${port}`);
