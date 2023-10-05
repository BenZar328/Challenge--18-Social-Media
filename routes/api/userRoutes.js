const express = require('express');
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
