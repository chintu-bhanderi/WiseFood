const { CHEF_TYPE } = require('../authTypes');
const FoodOrder = require('../models/foodOrderModel');
const {Worker} = require('../models/workerModel')
const TableBook = require('../models/tableBookModel');  
const TableBookLockToken = require('../models/tableBookLockTokenModel');
const Slot = require('../models/slotModel');
const FoodItemsModel = require('../models/foodItemsModel');


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
        const expirationTime = new Date(Date.now() + 300000);
        const data = await TableBookLockToken.create({ token });
        // const data = await TableBookLockToken.create({ token, createdAt: new Date() });
        console.log(1);

        res.status(200).json(data);
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
        const id = "64258739a306d83496ba62c3";
        
        // const data = await TableBookLockToken.findById(id);
        // const data = await TableBookLockToken.collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 60 });
        const data = await TableBookLockToken.collection.getIndexes();
        // console.log(1);
        const data2 = data;
        const expirationTime = new Date(Date.now());
        // const data = await TableBookLockToken.find({createdAt: {
        //     $gte: expirationTime
        //     // $lt: expirationTime
        //   }});  

        res.status(200).json(data);
    } catch(error){
        console.log(error.message);
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function updateData(req,res) {
    try{
        const image = "https://thumbs.dreamstime.com/b/gujarati-meal-sev-tomato-nu-shak-roti-gujarati-thali-consisting-roti-flatbread-tomato-sev-curry-also-known-as-sev-109155031.jpg";

        const id = "6413c89dbe596d080a9b23e7";

        const item = await FoodItemsModel.findById(id);

        item.image = image;

        await item.save();

        res.status(200).json(item);
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
    actionSomething,
    updateData
}