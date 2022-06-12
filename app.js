const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const accountRoutes = require('./routes/account');
const assessmentRoutes = require('./routes/assessment');
const csfCoreRiskRoutes = require('./routes/csf_core_risk');
const functionRoutes = require('./routes/function');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/account', accountRoutes);
app.use('/assessments', assessmentRoutes);
app.use('/csf_core_risk', csfCoreRiskRoutes);
app.use('/function', functionRoutes);

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true }).then(() => {
  console.log('Connection to the MongoDB database is established...');
  app.listen(8080);
}).catch(err => { console.log(err); });
