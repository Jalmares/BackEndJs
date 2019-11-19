'use strict';

const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
    res.json(cats);
};

const cat_get = (req, res) => {
    const catId = parseInt(req.params.id);
    if (catId > cats.length || catId <= 0) {
        res.send(`Cat with ${req.params.id} ID does not exists`);
    } else {
        res.json(cats[catId - 1]);
    }
};

module.exports = {
    cat_list_get, cat_get,
};