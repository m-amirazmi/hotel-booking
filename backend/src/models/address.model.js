const { Schema, model } = require('mongoose');

const addressSchema = new Schema(
	{
		postcode: { type: String, required: true },
		address: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		country: { type: String, required: true, default: 'Malaysia' },
		coordinate: { lat: String, lng: String },
	},
	{ timestamps: true }
);

module.exports = model('Address', addressSchema);
