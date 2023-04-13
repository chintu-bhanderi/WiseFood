const {Worker,validate} = require('../models/workerModel');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Joi = require("joi");
const { CHEF_TYPE, WAITER_TYPE } = require('../authTypes');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 86400 , checkperiod: 8640 });

const workerTypeKey = 'worker-type';

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
        if(req.body.type==CHEF_TYPE || req.body.type==WAITER_TYPE) {
            await new Worker({ ...req.body,password: hashPassword,load:0,totalLoad:0 }).save();
        } else {
            await new Worker({ ...req.body, password: hashPassword }).save();
        }
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
        return  res.status(404).json({
                    error: {
                        errorMessage: error.details[0].message
                    }
                })  
		
		const worker = await Worker.findOne({ email: req.body.email });
		if (!worker){
            return  res.status(404).json({
                error: {
                    errorMessage: ["Invalid Email or Password"]
                }
            })  
        }
		
		const validPassword = await bcrypt.compare(
			req.body.password,
			worker.password
        );
		if (!validPassword){
            return  res.status(404).json({
                error: {
                    errorMessage: ["Invalid Email or Password"]
                }
            })  
        }

        worker.isLogin = true;
        await worker.save();
		
		const token = worker.generateWorkerToken();
		res.status(200).send({ 
                token: token,
                message: "logged in successfully" 
        });
	} catch (error) {
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Server Error']
            }
       })
	}
};

async function workerLogout (req, res) {
    try {
		const id = req.workerId;

        const worker = await Worker.findById(id);
        if(!worker) {
            return  res.status(404).json({
                error: {
                    errorMessage: ["Invalid Id"]
                }
            })  
        }

        worker.isLogin = false;
        await worker.save();
		
		res.status(200).send({ 
            message: "logout successfully" 
        });
	} catch (error) {
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Server Error']
            }
       })
	}
}

async function getAllWorker (req, res) {
	try {
        const cachedWorkerTypes = cache.get(workerTypeKey);
        if (cachedWorkerTypes) {
            return res.status(200).send({ 
                types: cachedWorkerTypes,
                message: "Types get successfully" 
            });
        }

        const workers = await Worker.find({});
        let types = [];
        workers.forEach(worker => {
            if(!types.includes(worker.type)) {
                types.push(worker.type);
            }
        })
        cache.set(workerTypeKey, types);

        res.status(200).send({ 
            types: types,
            message: "Types get successfully" 
        });
	} catch (error) {
		return res.status(404).json({
            error: {
                 errorMessage : ['Internal Server Error']
            }
       })
	}
};


module.exports = { 
    workerRegistration,
    workerLogin,
    workerLogout,
    getAllWorker 
}
