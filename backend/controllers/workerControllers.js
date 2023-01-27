const {Worker,validate} = require('../models/workerModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Joi = require("joi");

async function workerRegistration(req, res) {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

        const worker = await Worker.findOne({ email: req.body.email });
        if (worker)
            return res
                .status(409)
                .send({ message: "Worker with given email already Exist!" });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new Worker({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "Worker Registered Successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
}

const validateLogin = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

async function workerLogin (req, res) {
	try {
		const { error } = validateLogin(req.body);
		if (error)
		return res.status(400).send({ message: error.details[0].message });
		
		const worker = await Worker.findOne({ email: req.body.email });
		if (!worker)
		return res.status(401).send({ message: "Invalid Email or Password" });
		
		const validPassword = await bcrypt.compare(
			req.body.password,
			worker.password
        );
		if (!validPassword)
		return res.status(401).send({ message: "Invalid Email or Password" });
		
		const token = worker.generateWorkerToken();
        // const deCodeToken = await jwt.verify(token,process.env.JWTPRIVATEKEY);
		res.status(200).send({ 
            data: token,
            // type:deCodeToken.type,
            message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
};

module.exports = { workerRegistration,workerLogin }
