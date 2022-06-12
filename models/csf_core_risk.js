const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const csf_core_riskSchema = new Schema({
  Identify: {
    type: Object,
  },
  Protect: {
    type: Object,
  },
  Detect: {
    type: Object,
  },
  Respond: {
    type: Object,
  },
  Recover: {
    type: Object,
  },
}, { timestamps: true });

const policiesDB = mongoose.connection.useDb('policies');

module.exports = policiesDB.model('csf_core_risk', csf_core_riskSchema);
