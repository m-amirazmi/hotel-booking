const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, trim: true, unique: true },
		password: { type: String, required: true },
		firstName: { type: String, required: false },
		lastName: { type: String, required: false },
		phone: { type: String, required: false },
		image: { type: String, required: false },
		address: { type: Schema.Types.ObjectId, ref: 'Address', required: false },
		hotels: [{ type: Schema.Types.ObjectId, ref: 'Hotel', required: false }],
		booking: [{ type: Schema.Types.ObjectId, ref: 'Booking', required: false }],
		bookingHistory: [{ type: Schema.Types.ObjectId, ref: 'Booking', required: false }],
		roles: [{ type: String, required: true, default: 'Customer' }],
	},
	{ timestamps: true }
);

module.exports = model('User', userSchema);
