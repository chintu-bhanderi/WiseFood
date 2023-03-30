const { CHEF_TYPE } = require('../authTypes');
const FoodOrder = require('../models/foodOrderModel');
const {Worker} = require('../models/workerModel')
const TableBook = require('../models/tableBookModel');  
const TableBookLockToken = require('../models/tableBookLockTokenModel');
const Slot = require('../models/slotModel');


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

async function actionSomething(req,res) {
    try{
        const {date,slotNo,tableNo} = req.body;
        
        const token = `date=${date}:slotNo=${slotNo}:tableNo=${tableNo}`;
        const data = await TableBookLockToken.insertMany({ token , "expireAfterSeconds": 100});
        console.log(1);

        res.status(200).json({data});
    } catch(error){
        console.log(error.message);
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function getData(req,res) {
    try{
        const id = "6423d8955241c1c1fe826096";
        
        // const data = await TableBookLockToken.findById(id);
        const data = await TableBookLockToken.index({ "createdAt": 1 }, { expireAfterSeconds: 100 })
        // console.log(1);

        res.status(200).json({data});
    } catch(error){
        console.log(error.message);
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

module.exports = {
    getAllChefs,
    getData,
    actionSomething
}