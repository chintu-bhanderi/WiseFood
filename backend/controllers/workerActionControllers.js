const { CHEF_TYPE, WAITER_TYPE } = require('../authTypes');
const {Worker} = require('../models/workerModel')
const FoodOrder = require('../models/foodOrderModel');

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

async function getChefMadeOrdersById(req,res) {
    try{
        const chefId = req.params.chefId;
        const orders = await FoodOrder.find({isDone:true,chef:chefId});
        res.status(200).send({
            orders,
            message: "Chef All Made Orders Get Successfully" 
        });
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

async function getWaiterServedOrdersById(req,res) {
    try{
        const waiterId = req.params.waiterId;
        const orders = await FoodOrder.find({isServed:true,waiter:waiterId});
        res.status(200).send({
            orders,
            message: "Waiter All Serverd Orders Get Successfully" 
        });
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
    getChefMadeOrdersById,
    getWaiterServedOrdersById,
    getAllWaiter
}