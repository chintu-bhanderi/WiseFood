const {User,validate} = require('../models/userModel');
const bcrypt = require("bcrypt");
const Joi = require("joi");

async function userRegistration (req, res) {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(404).json({
				error: {
					errorMessage: error.details.map(err => err.message)
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

		try{
			const salt = await bcrypt.genSalt(Number(process.env.SALT));
			const hashPassword = await bcrypt.hash(req.body.password, salt);
			await new User({ ...req.body, password: hashPassword,tokens:[] }).save();
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
		// res.cookie("jwtoken",token,{
		// 	expires: new Date(Date.now()+25892000000),
		// 	httpOnly: true
		// })

		// user.tokens.push(token);
		// await user.save();

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

async function userLogout(req, res) {
	try{

	} catch(error){
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
	}
}

async function getUserByUserId(req, res) {
	const userId = req.params.userId;
	console.log(userId);

	const user = await User.findById(userId);

	return res.status(200).json(user);
}

module.exports = { 
	userRegistration,
	userLogin, 
	userLogout,
	getUserByUserId
}