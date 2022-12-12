const express = require('express');
const { getDestination, getDestinations } = require('../controllers/destinationController');
const router = express.Router();


router.get('/', getDestinations);
router.get('/:id', getDestination);

module.exports = router;
