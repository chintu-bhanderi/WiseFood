const FoodCategory = require('../models/foodCategoryModel');
const FoodItem = require('../models/foodItemsModel');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 86400 , checkperiod: 8640 });

const categoryKey = 'categories';

async function getAllCategory(req,res) {
    try{
        const cachedCategories = cache.get(categoryKey);
        if (cachedCategories) {
            return res.status(200).send({ 
                categories : cachedCategories,
                message: "Food Categories get successfully"
            });
        }
        
        const categories = await FoodCategory.find();
        cache.set(categoryKey, categories);

        res.status(200).send({ 
            categories : categories,
            message: "Food Categories get successfully"
		});
    } catch(error){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
        })
    }
}

async function setCategory(req,res) {
    if(!req.body.name){
        res.status(400).json({message:"Please add Name of Category"}); 
        return;
    }
    const { name } = req.body;

    let category = await FoodCategory.findOne({name});

    if(category) {
        res.status(400).json({message:"Category is alredy set"}); 
        return;
    } 
    category = await FoodCategory.create({name,foodItem:[]});

    res.status(200).json(category); 
}

async function deleteCategory(req,res) {
    const name = req.params.name;
    const category = await FoodCategory.findOne({name});
    if(!category) {
        res.status(400).json({message:"This Category is not in list"}); 
        return;
    } 
    await FoodItem.deleteMany({category:category._id});
    await FoodCategory.deleteOne({name});
    res.status(200).json({message: "Category deleted successfully"}); 
}

module.exports = {
    setCategory,
    getAllCategory,
    deleteCategory
}