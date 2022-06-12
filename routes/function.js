const express = require('express');
const { body } = require('express-validator');

const functionController = require('../controllers/function');

const router = express.Router();

router.get('/:functionId', functionController.getFunction);

module.exports = router;