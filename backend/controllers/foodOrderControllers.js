const FoodOrder = require('../models/foodOrderModel');
const FoodItem = require('../models/foodItemsModel');
const TableBook = require('../models/tableBookModel');
const { CHEF_TYPE, WAITER_TYPE } = require('../authTypes');
const { Worker } = require('../models/workerModel');

async function getAllFoodOrders(req, res) {
    const orders = await FoodOrder.find({});

    res.status(200).json(orders);
}

async function getFoodOrderByTable(req, res) {
    const tableBookId = req.params.id

    const orders = await FoodOrder.find({ tableBook: tableBookId });

    res.status(200).json(orders);
}

async function getFoodOrderByChef(req, res) {
    const chefId = req.params.chefId;

    const orders = await FoodOrder.find({ chef: chefId, isDone: false });

    res.status(200).json(orders);
}

async function getFoodOrderByUser(req, res) {
    try{
        const userId = req.params.userId;

        const orders = await FoodOrder.find({ user: userId });

        res.status(200).send({ 
            foodOrders: orders,
            message: "FoodOrders get successfully" 
        });
    } catch (err) {
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
        })
    }
}

async function getFoodOrderByWaiter(req, res) {
    const waiterId = req.params.waiterId;

    const orders = await FoodOrder.find({ isDone: true, isServed: false, waiter: waiterId });

    res.status(200).json(orders);
}

async function findChefWithMinLoad() {
    const chefs = await Worker.find({ type: CHEF_TYPE, isLogin: true });
    let load = 10000;
    let findChef;
    for (let i = 0; i < chefs.length; i++) {
        if (chefs[i].load < load) {
            load = chefs[i].load;
            findChef = chefs[i];
        }
    }
    return findChef;
}

async function setFoodOrder(req, res) {
    try {
        const { name, quantity } = req.body;
        const tableBookId = req.params.id;
        if (!name || !quantity || !tableBookId) {
            res.status(400).json({ message: "Please enter all mendetory fields" })
            return;
        }
        const tableBook = await TableBook.findOne({ id: tableBookId });
        
        if (!tableBook) {
            res.status(400).json({ message: "Table is not booked yet" })
            return;
        }
        
        if (!tableBook.isAvailable) {
            res.status(400).json({ message: "Please conform table available from Counter" });
            return;
        }
        
        const foodItem = await FoodItem.findOne({ name });
        const totalPrice = quantity * foodItem.price;
        
        let chef = await findChefWithMinLoad();

        const order = await FoodOrder.create({ name, quantity, totalPrice, tableBook: tableBook._id, chef: chef._id,user:tableBook.user });

        chef.load = chef.load + parseInt(quantity);
        chef.totalLoad += parseInt(quantity);
        await chef.save();

        res.status(200).json(order);
    } catch (err) {
        console.log(err);
    }
}

async function findWaiterWithMinLoad() {
    const waiters = await Worker.find({ type: WAITER_TYPE, isLogin: true });
    let load = 10000;
    let findWaiter;
    for (let i = 0; i < waiters.length; i++) {
        if (waiters[i].load < load) {
            load = waiters[i].load;
            findWaiter = waiters[i];
        }
    }
    return findWaiter;
}

async function updateOrderDone(req, res) {
    const orderId = req.params.orderId;
    if (!orderId) {
        res.status(400).json({ message: "Please enter all mendetory fields" })
        return;
    }

    const order = await FoodOrder.findById(orderId);
    order.isDone = true;

    const chef = await Worker.findById(order.chef);
    chef.load = chef.load - parseInt(order.quantity);
    // await chef.foodOrder.pull(order._id);
    await chef.save();

    let waiter = await findWaiterWithMinLoad();
    waiter.load = waiter.load + 1;
    waiter.totalLoad = waiter.totalLoad + 1;
    await waiter.save();
    order.waiter = waiter._id;

    await FoodOrder.findByIdAndUpdate(orderId, order);

    res.status(200).json({ message: "Order is done is updates" });
}

async function updateOrderServe(req, res) {
    const orderId = req.params.orderId;
    if (!orderId) {
        res.status(400).json({ message: "Please enter all mendetory fields" })
        return;
    }

    const order = await FoodOrder.findById(orderId);
    order.isServed = true;

    const waiter = await Worker.findById(order.waiter);
    waiter.load = waiter.load - 1;
    await waiter.save();

    await FoodOrder.findByIdAndUpdate(orderId, order);

    res.status(200).json({ message: "Order isServe is updates" });
}



async function deleteOrderByTable(req, res) {
    const tableBookId = req.params.id;
    try {
        await FoodOrder.deleteMany({ tableBook: tableBookId });
    } catch (err) {
        return console.log(err);
    }
    return res.status(201).json({ message: "successfully delete" });
}

async function deleteAllOrders(req, res) {

    await FoodOrder.remove();

    return res.status(201).json({ message: "successfully All delete" });
}

module.exports = {
    getAllFoodOrders,
    getFoodOrderByTable,
    getFoodOrderByChef,
    getFoodOrderByUser,
    getFoodOrderByWaiter,
    setFoodOrder,
    updateOrderDone,
    updateOrderServe,
    deleteOrderByTable,
    deleteAllOrders
}