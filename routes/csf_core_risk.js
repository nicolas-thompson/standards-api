const express = require('express');
const { body } = require('express-validator');

const csf_core_riskController = require('../controllers/csf_core_risk');

const router = express.Router();

router.get('/', csf_core_riskController.getCsfCoreRisk);

module.exports = router;
