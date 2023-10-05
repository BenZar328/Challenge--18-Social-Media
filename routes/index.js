const express = require('express');
const apiRoutes = require('./api');

const router = express.Router();
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('Wrong route!');
});

module.exports = router;
