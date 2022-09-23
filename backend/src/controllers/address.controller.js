const Address = require('../models/address.model');
const User = require('../models/user.model');

exports.createAddress = async (req, res) => {
	const { address } = req.body;

	const newAddress = new Address(address);
	await newAddress.save();
	return newAddress;
};

exports.updateAddress = async (req, res) => {
	const user = await User.findById(req.user.id);

	let updateAddress;
	if (req.query.hotel) {
	} else {
		updatedAddress = await Address.findByIdAndUpdate(user.address, req.body, { new: true });
	}
	return res.status(201).json({ status: true, message: 'Address updated.', data: updatedAddress });
};

exports.getAddresses = async (req, res) => {
	const addresses = await Address.find();

	if (addresses.length === 0) return res.status(400).json({ status: false, message: 'No addresses available.' });

	return res.status(200).json({ status: true, message: 'Addresses found.', data: addresses });
};
