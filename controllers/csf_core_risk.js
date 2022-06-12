const csf_core_risk = require('../models/csf_core_risk');

exports.getCsfCoreRisk = (req, res, next) => {

  console.log("getCsfCoreRisk()");

  csf_core_risk.find({}).then((csf_core_risk) => {

    console.log("csf_core_risk: " + csf_core_risk);

    res.status(200).json({
      csf_core_risk: csf_core_risk
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