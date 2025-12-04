const Item = require("../models/item")

const getItems = async (req, res) => {
    try{
        const items = await Item.find().populate("updateBy", "name role");
        res.json(items);

    }catch(err){
        res.status(500).json({
            msg:"server error"
        })
    }
}

// create item
const createItem = async (req, res) => {
    const {name, sku, quantity, price} = req.body;

    if(!name || !sku){
        res.status(400).json({msg:"enter correct details"})

    }
    try{
        const checkSku = await item.findOne(sku);
        if(checkSku){
            return res.json({msg: 'duplicate sku error'});

        }

        const newItem = new Item ({
            name,
            sku,
            quantity: quantity || 0, 
            price: price || 0,
            updatedBy: req.user.id,
            lastUpdatedAt: new Date()  
        })

        await newItem.save()
        res.status(201).json({
            msg: "Item created successfully",
            newItem
        });

    }catch(err){
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    
    }
}


// update Item
const updateItem = async (req, res) => {
   try{
    const item = await Item.findById(req.param.id);

    if(!item){
        return res.status(404).json({ msg: "Item not found" });

    }

    item.name = req.body.name || item.name;
    item.quantity = req.body.quantity ?? item.quantity;
    item.price = req.body.price ?? item.price;

    itemm.updatedBy = req.user.id;
    item.lastUpdatedAt = new Date();

    await item.save();

     res.json({
            msg: "Item updated successfully",
            item
        });
}catch(err){
   console.error(err);
        res.status(500).json({ msg: "Server error" });
    } 
}

// delete item 
const deleteItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(404).json({ msg: "Item not found" });
        }

        await item.deleteOne();

        res.json({ msg: "Item deleted successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = {getItems, createItem,
                    updateItem, deleteItem
                };











