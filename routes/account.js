const express = require('express');
const { body } = require('express-validator');

const accountController = require('../controllers/account');

const router = express.Router();

router.get('/', accountController.getAccounts);
router.post('/', [
  body('description').trim().isLength({ max: 255 }),
  body('email').trim().isLength({ max: 255 }),
  body('industry').trim().isLength({ max: 255 }),
  body('organization_city').trim().isLength({ max: 255 }),
  body('organization_country').trim().isLength({ max: 255 }),
  body('organization_name').trim().isLength({ max: 255 }),
  body('password').trim().isLength({ max: 255 }),
  body('username').trim().isLength({ max: 255 }),
], accountController.createAccount);

module.exports = router;