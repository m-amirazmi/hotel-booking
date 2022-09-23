const { verify } = require('jsonwebtoken');

exports.verifyLogin = async (req, res, next) => {
	let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

	if (!token) return res.status(403).json({ message: 'A token is required for authentication', status: false });
	if (token.includes('Bearer')) token = token.split(' ')[1];

	try {
		const decoded = verify(token, process.env.JWT);
		req.user = decoded;
	} catch (err) {
		return res.status(401).send('Invalid Token');
	}
	return next();
};
