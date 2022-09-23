const { Schema, model } = require('mongoose');

const bookingSchema = new Schema({}, { timestamps: true });

module.exports = model('Booking', bookingSchema);
