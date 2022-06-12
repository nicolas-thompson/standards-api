const Assessment = require('../models/assessment');

exports.getAssessments = (req, res, next) => {
  Assessment.find().then((assessments) => {
    res.status(200).json({
      assessments
    });
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
    next(error);
  }
  );
}

exports.createAssessment = (req, res, next) => {
  const requestAssessment = {
    name: req.body.name,
    product_name: req.body.product_name,
    industry: req.body.industry,
    country: req.body.country,
    city: req.body.city,
    status: req.body.status,
    standards: req.body.standards,
  };

  const newAssessment = new Assessment(requestAssessment);
  newAssessment.save().then((createdAssessment) => {

    res.status(201).json({
      message: 'Assessment created successfully',
      createdAssessment: { _id: createdAssessment._id.toString() }
    });
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
    next(error);
  }
  );
}

exports.updateAssessment = (req, res, next) => {
  const assessmentId = req.params.assessmentId;
  Assessment.findById(assessmentId).then((assessment) => {
    if (!assessment) {
      return res.status(404).json({
        message: 'Assessment not found'
      });
    }

    assessment = req.body.assessment;

    assessment.save().then((updatedAssessment) => {
      res.status(200).json({
        message: 'Assessment updated successfully',
        updatedAssessment: updatedAssessment
      });
    }
    ).catch((error) => {
      res.status(400).json({
        error: error
      });
      next(error);
    }
    );
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
    next(error);
  }
  );
}


exports.deleteAssessment = (req, res, next) => {
  const assessmentId = req.params.assessmentId;
  Assessment.findById(assessmentId).then((assessment) => {
    if (!assessment) {
      return res.status(404).json({
        message: 'Assessment not found'
      });
    }

    assessment.remove().then(() => {
      res.status(200).json({
        message: 'Assessment deleted successfully'
      });
    }
    ).catch((error) => {
      res.status(400).json({
        error: error
      });
      next(error);
    }
    );
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
    next(error);
  }
  );
}

exports.getOneAssessment = (req, res, next) => {
  const assessmentId = req.params.assessmentId;
  Assessment.findById(assessmentId).then((assessment) => {
    if (!assessment) {
      return res.status(404).json({
        message: 'Assessment not found'
      });
    }
    res.status(200).json({
      assessment: assessment
    });
  }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
    next(error);
  }
  );
}