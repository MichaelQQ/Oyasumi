const FormData = require('form-data');
require('isomorphic-fetch');
const co = require('co');
const express = require('express');
const path = require('path');

const router = express.Router();
const INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_ID;
const INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_SECRET;
const INSTAGRAM_REDIRECT_URI = 'http://localhost:7788/api/instagram/';

function* getAccessToken(code) {
  const url = 'https://api.instagram.com/oauth/access_token';
  const formData = new FormData();

  formData.append('client_id', INSTAGRAM_CLIENT_ID);
  formData.append('client_secret', INSTAGRAM_CLIENT_SECRET);
  formData.append('grant_type', 'authorization_code');
  formData.append('redirect_uri', INSTAGRAM_REDIRECT_URI);
  formData.append('code', code);

  const response = yield fetch(url, { method: 'post', body: formData });
  const data = yield response.json();
  return data.access_token;
}

router.get('/instagram/login', (req, res) => {
  res.redirect(`https://api.instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URI}&response_type=code&scope=public_content`);
});
router.get('/instagram', (req, res) => {
  const code = req.query.code;

  if (code) {
    co(function *() {
      const accessToken = yield getAccessToken(code);
      const response = yield fetch(`https://api.instagram.com/v1/tags/sexy/media/recent?access_token=${accessToken}`);
      const data = yield response.json();
      console.log(data);
    });
  }
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

export default router;
