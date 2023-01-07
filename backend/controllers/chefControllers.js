const Chef = require('../models/chefModel');


async function getAllChefs(req,res) {
    // const slotNo = req.params.slotNo; 
    
    const chefs = await Chef.find({});

    res.status(200).json(chefs);
}

async function insertChef (req,res) {
    const {name} = req.body;
    if(!name) {
        res.status(400).json({message: "Please enter all mendetory fields"})
        return;
    }

    const chef = await Chef.create({name});

    res.status(200).json(chef);
}


module.exports = {
    getAllChefs,
    insertChef,

}