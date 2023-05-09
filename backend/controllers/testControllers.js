const { CHEF_TYPE } = require('../authTypes');
const FoodOrder = require('../models/foodOrderModel');
const {Worker} = require('../models/workerModel')
const TableBook = require('../models/tableBookModel');  
const Slot = require('../models/slotModel');
const FoodItemsModel = require('../models/foodItemsModel');
const CryptoJS = require('crypto-js');
const secretKey = 'mySecretKey';


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
        console.log(1);
        console.log(req.body);
        res.status(200).json({message: "seccess"});
    } catch(error){
        console.log(error.message);
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function postData(req,res) {
    try{
        console.log(1);
        console.log(req.body.token);
        const decryptedBytes = CryptoJS.AES.decrypt(req.body.token, secretKey);
        const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
        const token = JSON.parse(decryptedMessage);
        console.log(token);
        res.status(200).json({message: "seccess"});
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
    postData,
    actionSomething,
    updateData
}