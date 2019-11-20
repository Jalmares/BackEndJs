'use strict';

const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});


router.get('/:id', catController.cat_get);
router.get('/', catController.cat_list_get);
router.post('/upload', upload.single('catfile'), catController.upload_cat);
module.exports = router;