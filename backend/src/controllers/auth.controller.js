const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { createUser } = require('./user.controller');

exports.register = async (req, res, next) => {
	const { password } = req.body;

	const salt = bcrypt.genSaltSync(10);
	const hash = bcrypt.hashSync(password, salt);

	req.body.password = hash;

	return await createUser(req, res);
};

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) return res.status(404).json({ message: 'User Not Found!', status: false });

	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) return res.status(400).json({ message: 'Wrong credentials!', status: false });

	const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT);
	const { roles, ...otherDetails } = user._doc;

	res.cookie('access_token', token, { httpOnly: true });
	return res.status(201).json({ message: 'Successfully logged in.', status: true, data: { details: { ...otherDetails }, roles } });
};

exports.logout = (req, res, next) => {
	res.clearCookie('access_token', { httpOnly: true });
	return res.sendStatus(204);
};
