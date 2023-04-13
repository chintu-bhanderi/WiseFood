const { Worker } = require('../models/workerModel');
const {User,validate} = require('../models/userModel');
const { decodeJWTtoken } = require('../utility/decodeJWToken');
const Joi = require("joi");

const userRegistrationMiddleware = async (req, res, next) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(404).json({
                error: {
                    errorMessage: error.details.map(err => err.message)
                }
            })
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(404).json({
                error: {
                    errorMessage: ["User with given email already Exist!"]
                }
            })
        }

        next();

    } catch (error) {
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
	}
}

const validateLogin = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

const userLoginMiddleware = async (req, res, next) => {
    try {
        const { error } = validateLogin(req.body);
		if (error)
        return res.status(404).json({
            error: {
                errorMessage: error.details[0].message
            }
        })
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(404).json({
				error: {
					errorMessage: ["Invalid Email or Password"]
				}
			})
		}

        req.user = user;
        next();

    } catch (error) {
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
	}
}

const userLogoutMiddleware = async (req, res, next) => {
    try {
        const { id } = decodeJWTtoken(req, res);
        try {
            req.workerId = await Worker.findById(id).select('_id');
            next();
        } catch (error) {
            return res.status(404).json({
                error: {
                    errorMessage: ['Internal Server Error']
                }
            })
        }
    } catch (error) {
        console.error(error);
        return;
    }
}

module.exports = {
    userRegistrationMiddleware,
    userLoginMiddleware,
    userLogoutMiddleware
}