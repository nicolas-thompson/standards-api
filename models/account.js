const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  description: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  email: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  industry: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  organization_city: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  organization_country: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  organization_name: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  password: {
    type: String,
    trim: true,
    maxlength: 255,
  },
  username: {
    type: String,
    trim: true,
    maxlength: 255,
  },
}, { timestamps: true });


const organizationDB = mongoose.connection.useDb('organization');

module.exports = organizationDB.model('Account', accountSchema);