'use strict';

const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');


router.get('/:id', catController.cat_get);
router.get('/', catController.cat_list_get);
module.exports = router;