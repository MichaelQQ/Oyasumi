import 'isomorphic-fetch';
import co from 'co';
import express from 'express';

const router = express.Router();
const FLICKR_ID = process.env.FLICKR_ID;
const FLICKR_URI =
  `https://api.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${FLICKR_ID}`;

function* fetchFlickr(query) {
  const keys = Object.keys(query);
  const requestUri = keys.reduce((prev, now) => `${prev}&${now}=${query[now]}`, FLICKR_URI);
  const response = yield fetch(requestUri);
  const data = yield response.json();
  return data;
}

router.post('/flickr', (req, res) => {
  co(function* () {
    const data = yield fetchFlickr(req.body);
    res.send(data);
    res.end();
  });
});

export default router;
