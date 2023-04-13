const FoodCategory = require('../models/foodCategoryModel');
const FoodItem = require('../models/foodItemsModel');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 86400 , checkperiod: 8640 });

async function getFoodItemByCategory(req,res) {
    try{
        const categoryId = req.params.id

        const foodItemsKey = `categoryId-${categoryId}`; 
        const cachedFoodItems = cache.get(foodItemsKey);
        if (cachedFoodItems) {
            return res.status(200).send({ 
                foodItems: cachedFoodItems,
                message: "FoodItem get successfully" 
            });
        }

        const category = await FoodCategory.findOne({_id: categoryId})
        if(!category) {
            return  res.status(404).json({
                error: {
                    errorMessage: ["This category does not exist"]
                }
            })  
        }
        const foodItems = await FoodItem.find({ category: category._id})
        cache.set(foodItemsKey, foodItems);

        res.status(200).send({ 
            foodItems: foodItems,
            message: "FoodItem get successfully" 
        });
    } catch(error){
        return res.status(404).json({
            error: {
                errorMessage : ['Internal Sever Error']
            }
        })
    }
}
async function setFooditem (req,res) {
    const { name,price, category} = req.body;
    if(!name || !price || !category) {
        res.status(400).json({message: "Please enter all mendetory fields"})
        return;
    }

    let existingCategory = await FoodCategory.findOne({name:category});
    if(!existingCategory) {
        res.status(400).json({message: "Please enter valid category"})
        return;
    }
    const foodItem = await FoodItem.create({
        name,price,category: existingCategory._id   
    });
    existingCategory.foodItem.push(foodItem._id)
    await existingCategory.save();
    res.status(200).json(foodItem);
}

async function updateFoodItem(req,res) {
    const name = req.params.name

    let foodItem = await FoodItem.findOne({name});
    if(!foodItem) {
        res.status(400).json({message: "food-item doesn't exist"});
        return;
    }
    if(req.body.name) foodItem.name = req.body.name; 
    if(req.body.price) foodItem.price = req.body.price;

    await FoodItem.findByIdAndUpdate(foodItem._id,foodItem);

    res.status(200).json({
        message : `Update food-item at ${req.params.name}`
    })
}

async function deleteFoodItem(req,res) {
    const name = req.params.name;
    let foodItem;
    try{
        foodItem = await FoodItem.findOne({name});
        await FoodItem.deleteOne({name}).populate('foodcategories');
        category = await FoodCategory.findOne({_id:foodItem.category});
        await category.foodItem.pull(foodItem._id);
        await category.save();
    } catch (err) {
        return console.log(err);
    }   
    return res.status(201).json({message:"successfully delete"});
}

module.exports = {
    getFoodItemByCategory,
    setFooditem,
    updateFoodItem,
    deleteFoodItem,
}