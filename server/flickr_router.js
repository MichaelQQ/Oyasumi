import 'isomorphic-fetch';
import express from 'express';

const router = express.Router();

router.get('/flickr', (req, res) => {
  res.end('hi api!');
});
router.post('/flickr', (req, res) => {
  console.log('method:', req.body.method);
  console.log('value:', req.body.value);
  res.end('success');
});

export default router;
