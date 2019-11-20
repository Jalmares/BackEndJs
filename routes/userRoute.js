'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/:id', userController.user_get);
router.get('/', userController.user_list_get);
router.post('/', userController.user_post);
module.exports = router;