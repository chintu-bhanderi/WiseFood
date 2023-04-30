const { User, validate } = require('../models/userModel');
const bcrypt = require("bcrypt");
const Joi = require("joi");

async function userRegistration(req, res) {
	try {
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		await new User({ ...req.body, password: hashPassword}).save();
		res.status(200).send({
			message: "User registered successfully"
		});
	} catch (error) {
		return res.status(404).json({
			error: {
				errorMessage: ['Internal Sever Error']
			}
		})
	}
}

async function userLogin(req, res) {
	try {
		const user = req.user;

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res.status(404).json({
				error: {
					errorMessage: ["Invalid Email or Password"]
				}
			})
		}

		const token = user.generateAuthToken();
		
		res.status(200).send({
			token: token,
			message: "logged in successfully"
		});
	} catch (error) {
		return res.status(404).json({
			error: {
				errorMessage: ['Internal Sever Error']
			}
		})
	}
};

async function userLogout(req, res) {
	try {

	} catch (error) {
		return res.status(404).json({
			error: {
				errorMessage: ['Internal Sever Error']
			}
		})
	}
}

async function getUserByUserId(req, res) {
	const userId = req.params.userId;

	const user = await User.findById(userId);

	return res.status(200).json(user);
}

module.exports = {
	userRegistration,
	userLogin,
	userLogout,
	getUserByUserId
}