const {Worker,validate} = require('../models/workerModel');
const { decodeJWTtoken } = require('../utility/decodeJWToken');

const authMiddleware = async (req, res, next) => {
    try{
        const { id } = decodeJWTtoken(req, res);
        try{
            req.workerId = await Worker.findById(id).select('_id');
            next();
        } catch(error){
            return res.status(404).json({
                error: {
                     errorMessage : ['Internal Server Error']
                }
           })
        }
    } catch(error) {
        console.error(error);
        return;
    }
} 

module.exports = {
    authMiddleware
}