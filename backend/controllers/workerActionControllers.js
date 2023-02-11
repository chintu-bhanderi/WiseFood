const { CHEF_TYPE, WAITER_TYPE } = require('../authTypes');
const {Worker} = require('../models/workerModel')

async function getAllChefs(req,res) {
    try{
        const chefs = await Worker.find({type:CHEF_TYPE});
        res.status(200).json(chefs);
    } catch(error){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function getAllWaiter(req,res) {
    try{
        const waiters = await Worker.find({type:WAITER_TYPE,isLogin:true});
        res.status(200).json(waiters);
    } catch(error){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

module.exports = {
    getAllChefs,
    getAllWaiter
}