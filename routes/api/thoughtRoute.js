const express = require('express');
const thoughtsControllers = require('../../controllers/thoughtsControllers');

const router = express.Router();

router.get('/', thoughtsControllers.getThoughts);
router.get('/:thoughtId', thoughtsControllers.getSingleThought);
router.post('/', thoughtsControllers.createThought);
router.delete('/:thoughtId', thoughtsControllers.deleteThought);

module.exports = router;
