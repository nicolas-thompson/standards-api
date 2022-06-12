const express = require('express');
const { body } = require('express-validator');

const assessmentController = require('../controllers/assessment');

const router = express.Router();

router.get('/', assessmentController.getAssessments);

router.post('/', [
  body('name').trim().isLength({ max: 255 }),
  body('product_name').trim().isLength({ max: 255 }),
  body('industry').trim().isLength({ max: 255 }),
  body('country').trim().isLength({ max: 255 }),
  body('city').trim().isLength({ max: 255 }),
  body('subCategories').isObject(),
], assessmentController.createAssessment);

router.put('/:assessmentId', assessmentController.updateAssessment);
router.get('/:assessmentId', assessmentController.getOneAssessment);

module.exports = router;