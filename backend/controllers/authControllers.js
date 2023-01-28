const {User,validate} = require('../models/userModel');
const bcrypt = require("bcrypt");
const Joi = require("joi");

async function userRegistration (req, res) {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(404).json({
				error: {
					errorMessage: error.details[0].message
				}
			})  

		const user = await User.findOne({ email: req.body.email });
		if (user){
			return  res.status(404).json({
				error: {
					errorMessage: ["User with given email already Exist!"]
                }
            })  
        }

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(200).send({ 
			message: "User registered successfully"
		});
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

async function userLogin (req, res) {
	try {
		console.log('1');
		const { error } = validateLogin(req.body);
		if (error)
		return res.status(404).json({
			error: {
				errorMessage: error.details[0].message
			}
		})  
		const user = await User.findOne({ email: req.body.email });
		if (!user){
			return  res.status(404).json({
				error: {
					errorMessage: ["Invalid Email or Password"]
                }
            })  
        }
		console.log('2');
		
		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword){
			return  res.status(404).json({
				error: {
					errorMessage: ["Invalid Email or Password"]
				}
			})  
		}
		
		const token = user.generateAuthToken();
		console.log('3');
		res.status(200).send({ 
			token: token,
			message: "logged in successfully" 
		});
	} catch (error) {
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
	}
};

module.exports = { userRegistration , userLogin}