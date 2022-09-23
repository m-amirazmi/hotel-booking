const User = require('../models/user.model');
const { createAddress } = require('./address.controller');

exports.createUser = async (req, res) => {
	const { email, username, role, address } = req.body;

	const existsEmail = await User.findOne({ email });
	if (existsEmail) return res.status(400).json({ message: 'Email already exists.', status: false });

	const existsUsername = await User.findOne({ username });
	if (existsUsername) return res.status(400).json({ message: 'Username already exists.', status: false });

	if (!role || role === '') req.body.roles = ['Customer'];
	else req.body.roles = ['Customer', role];

	if (address) req.body.address = await createAddress(req, res);

	const user = new User(req.body);
	await user.save();

	return res.status(201).json({ message: 'User created.', status: true, data: user });
};

exports.updateUser = (req, res) => {
	const data = {};
	return res.status(201).json({ message: 'User updated.', status: true, data });
};

exports.getUser = (req, res) => {
	const { id } = req.params;
	const data = {};
	return res.status(200).json({ message: 'Retrieved user.', status: true, data });
};

exports.getUsers = (req, res) => {
	const data = {};
	return res.status(200).json({ message: 'Retrieved users.', status: true, data });
};

exports.deleteUser = (req, res) => {
	const { id } = req.params;
	return res.sendStatus(204);
};
