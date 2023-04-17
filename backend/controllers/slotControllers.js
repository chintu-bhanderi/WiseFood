const Slot = require('../models/slotModel');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 86400 , checkperiod: 8640 });

const slotKey = 'slots';

async function getSlotNo (req,res) {
    try{
        const slotId = req.params.slotId;

        const slotNoKey = `slotId-${slotId}`; 
        const cachedSlotNo = cache.get(slotNoKey);
        if (cachedSlotNo) {
            return res.status(200).send({ 
                slotNo: cachedSlotNo,
                message: "SlotNo get successfully" 
            });
        }

        const slot = await Slot.findById(slotId);
        cache.set(slotNoKey, slot.slotNo);
        
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
        const cachedSlots = cache.get(slotKey);
        if (cachedSlots) {
            return res.status(200).send({ 
                slots: cachedSlots,
                message: "Slot get successfully" 
            });
        }

        const slots = await Slot.find({});
        cache.set(slotKey, slots);

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
        const {slotNo,startTime,endTime,category} = req.body;
        if(!slotNo || !startTime || !endTime || !category) {
            return  res.status(404).json({
				error: {
					errorMessage: ["Please enter all mendetory fields"]
                }
            })  
        }
        const slot = await Slot.create({slotNo,startTime,endTime,category});
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