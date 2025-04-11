const { request } = require('express');
const Category = require('../models/categoryModel');
const fs = require('fs');
const path = require('path');

module.exports.viewCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.addCategory = async (req, res) => {
    try{

        await Category.create({
            name: req.body.name,
            image: req.file.path
        });
        res.status(201).json({request: req.body, message: "Category added successfully"})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

module.exports.deleteCategory = async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Category deleted successfully"})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

module.exports.updateCategory = async (req, res) => {
    try{
        await Category.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            image: req.file.path
        });

        fs.unlinkSync(req.file.path, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
        
        res.status(200).json({message: "Category updated successfully"})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}