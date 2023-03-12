const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const workerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isLogin: { type: Boolean, default: false }, 
	load:{ type: Number},
	totalLoad:{ type: Number }
});

workerSchema.methods.generateWorkerToken = function () {
	const token = jwt.sign({ 
        id: this._id,
		name: this.name,
        type: this.type,
        email: this.email,
		totalLoad : this.totalLoad
    }, process.env.JWTPRIVATEKEY, {
		expiresIn: process.env.TOKEN_EXP,
	});
	return token;
};

const Worker = mongoose.model("Worker", workerSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("Worker Name"),
		type: Joi.string().required().label("Worker Type"),
		email: Joi.string().email().required().label("Worker Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { Worker, validate };
