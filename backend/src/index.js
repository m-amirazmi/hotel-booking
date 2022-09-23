require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { connection } = require('mongoose');
const { connectDB } = require('./utils/db');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', require('./routes/auth.route'));
app.use('/api/users', require('./routes/user.route'));
app.use('/api/addresses', require('./routes/address.route'));

connection.on('disconnected', () => console.log('mongoDB disconnected!'));

app.listen(process.env.PORT, () => {
	connectDB();
	console.log(`Connected to server http://localhost:${process.env.PORT}.`);
});
