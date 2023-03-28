const FoodCategory = require('../models/foodCategoryModel');
const FoodItem = require('../models/foodItemsModel');

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

async function getAllCategory(req,res) {
    try{
        const categories = await FoodCategory.find();
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