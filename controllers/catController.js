'use strict';

const catModel = require('../models/catModel');

/*
const cat_get = (req, res) => {
    const catId = parseInt(req.params.id);
    if (catId > cats.length || catId <= 0) {
        res.send(`Cat with ${req.params.id} ID does not exists`);
    } else {
        res.json(cats[catId - 1]);
    }
};
 */

const cat_get = async (req, res) => {
    const params = [req.params.id];
    const cat = await catModel.getCat(params);
    await res.json(cat[0]);
};

const upload_cat = (req, res) => {
    res.send('upload complete');
};

const cat_list_get = async (req, res) => {
    const cats = await catModel.getAllCats();
    await res.json(cats);
};



module.exports = {
    cat_list_get, cat_get, upload_cat,
};