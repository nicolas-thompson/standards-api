const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const functionSchema = new Schema({
  function_id: {
    type: String,
  },
  nist: {
    type: Number,
  },
  trs: {
    type: Number,
  },
  tally: {
    type: Number,
  },
  name: {
    type: String,
  },
}, { timestamps: true });

const policiesDB = mongoose.connection.useDb('policies');

module.exports = policiesDB.model('functions', functionSchema);