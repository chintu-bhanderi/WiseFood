const Slot = require('../models/slotModel');

async function getSlotNo (req,res) {
    try{
        const slotId = req.params.slotId;

        const slot = await Slot.findById(slotId);
        
        res.status(200).send({ 
			slotNo: slot.slotNo,
			message: "SlotNo get successfully" 
		});
    } catch(err){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })       
    }
}

async function getAllSlot(req,res) {
    try{
        const slots = await Slot.find({});
        res.status(200).send({ 
			slots: slots,
			message: "Slot get successfully" 
		});
    } catch (error) {
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })
    }
}

async function setSlot (req,res) {
    try{
        const {slotNo,startTime,endTime} = req.body;
        if(!slotNo && !startTime && !endTime) {
            return  res.status(404).json({
				error: {
					errorMessage: ["Please enter all mendetory fields"]
                }
            })  
        }
        const slot = await Slot.create({slotNo,startTime,endTime});
        res.status(200).send({ 
			message: "Slot created successfully" 
		});
    } catch(err){
        return res.status(404).json({
            error: {
                 errorMessage : ['Internal Sever Error']
            }
       })       
    }
    
}

module.exports = {
    getAllSlot,
    setSlot,
    getSlotNo
}