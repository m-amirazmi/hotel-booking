const { connect } = require('mongoose');

exports.connectDB = async () => {
	try {
		await connect(process.env.DB);
		console.log('Connected to mongoDB.');
	} catch (error) {
		throw error;
	}
};
