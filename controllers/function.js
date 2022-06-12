const functionDocument = require('../models/function');

exports.getFunction = (req, res, next) => {
  const functionId = req.params.functionId;

  functionDocument.find({ function_id: functionId }).then((functionDocument) => {

    console.log("functionDocument", functionDocument);
    res.status(200).json({
      functionDocument: functionDocument
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