const Slot = require('../models/slotModel');


async function getAllSlot(req,res) {
    // const slotNo = req.params.slotNo; 
    
    const slots = await Slot.find({});

    res.status(200).json(slots);
}
async function setSlot (req,res) {
    const {slotNo,startTime,endTime} = req.body;
    if(!slotNo && !startTime && !endTime) {
        res.status(400).json({message: "Please enter all mendetory fields"})
        return;
    }

    const order = await Slot.create({slotNo,startTime,endTime});

    res.status(200).json(order);
}


module.exports = {
    getAllSlot,
    setSlot,
}