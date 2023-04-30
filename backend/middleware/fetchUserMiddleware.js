const { Worker } = require('../models/workerModel');
const {User,validate} = require('../models/userModel');
const { decodeJWTtoken } = require('../utility/decodeJWToken');

const fetchUserMiddleware = async (req, res, next) => {
    try {
        
        const { id } = decodeJWTtoken(req, res);
        if(!id) return res.status(404).json({
                error: {
                    errorMessage: ['Token is not valid']
                }
            })
        try {
            req.userId = id;
            next();
        } catch (error) {
            return res.status(404).json({
                error: {
                    errorMessage: ['Internal Server Error']
                }
            })
        }
    } catch (error) {
        return;
    }
}

module.exports = {
    fetchUserMiddleware
}
