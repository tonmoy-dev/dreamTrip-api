const asyncHandler = require('express-async-handler');
const Destination = require('../models/destinationModel');

const getDestinations = asyncHandler(async (req, res, next) => {
    const destinations = await Destination.find({});
    res.status(200).json(destinations);
});
const getDestination = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const destination = await Destination.findOne({ destination_id: id })
    res.status(200).json(destination);
});

module.exports = {
    getDestination,
    getDestinations
}
