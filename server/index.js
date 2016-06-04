import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import 'isomorphic-fetch';
import FormData from 'form-data';
import co from 'co';

const port = process.env.PORT || 7788;
const INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_ID;
const INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_SECRET;
const INSTAGRAM_REDIRECT_URI = 'http://localhost:7788/api/instagram/';
const app = express();

app.use(helmet());
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

router.get('/instagram/login', (req, res) => {
  res.redirect(`https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URI}&response_type=code&scope=public_content`);
});
router.get('/instagram', (req, res) => {
  const code = req.query.code;

  if (code) {
    const formData = new FormData();
    formData.append('client_id', INSTAGRAM_CLIENT_ID);
    formData.append('client_secret', INSTAGRAM_CLIENT_SECRET);
    formData.append('grant_type', 'authorization_code');
    formData.append('redirect_uri', INSTAGRAM_REDIRECT_URI);
    formData.append('code', code);

    co(function *() {
      const url = 'https://api.instagram.com/oauth/access_token';
      const res1 = yield fetch(url, { method: 'post', body: formData });
      const result = yield res1.json();
      const accessToken = result.access_token;

      const res2 = yield fetch(`https://api.instagram.com/v1/tags/sexy/media/recent?access_token=${accessToken}`);
      const data = yield res2.json();
      console.log(data);
    });
  }

  res.end('go rock');
});

app.use('/api', router);
app.listen(port);
console.log(`Listen at port: ${port}`);
