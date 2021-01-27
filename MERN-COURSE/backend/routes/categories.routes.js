const Category = require('../models/Category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({ success: false });
    }
    res.status(200).send(categoryList);
});

router.get(`/:id`, async (req, res) => {
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(500).json({ success: false, message: 'The category with given ID was not found' });
    }
    res.send(category);
});

router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
        status: req.body.status
    });

    category = await category.save();

    if(!category){
        return res.status(404).send('The category can not be created.');
    } else {
        res.send(category);
    }

});

router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        icon:   req.body.icon,
        color: req.body.color,
        status: req.body.status
    }, {
        new: true
    });

    if(!category){
        return res.status(404).send('The category can not be updated.');
    } else {
        res.status(200).send(category);
    }

});

router.delete('/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then(category => {
            if(category){
                return res.status(200).json({success: true, message: 'The category is deleted'});
            } else {
                return res.status(404).json({succes: false, message: 'Category not found'});
            }
        })
        .catch(err => {
            return res.status(400).json({succes: false, error: err});
        })
});

module.exports = router;
