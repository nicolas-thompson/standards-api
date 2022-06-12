const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
  name: {
    type: String,
  },
  product_name: {
    type: String,
  },
  industry: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  status: {
    type: String,
  },
  standards: {
    type: Object,
  },
}, { timestamps: true });

const organizationDB = mongoose.connection.useDb('organization');

module.exports = organizationDB.model('Assessments', assessmentSchema);
