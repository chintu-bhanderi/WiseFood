const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	address: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ 
        id: this._id,
		firstName: this.firstName,
		lastName: this.lastName,
        type: "user",
        email: this.email,
		address: this.address
    }, process.env.JWTPRIVATEKEY, {
		expiresIn: process.env.TOKEN_EXP,
	});
	return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		address: Joi.string().required().label("Address"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
