const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const destinationSchema = Schema({
    /* _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: '',
    }, */
    destination_id: Number,
    destination_name: String,
    location: String,
    departure: String,
    departure_time: String,
    return_time: String,
    destination_rating: Number,
    travel_cost: Number,
    description: String,
    images : {
      thumbnail_url: String,
      alt: String,
      other_imgUrl: String
    }  
});



module.exports = model('destination', destinationSchema);
