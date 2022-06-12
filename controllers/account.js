const Account = require('../models/account');

exports.getAccounts = (req, res, next) => {
  Account.find().then((accounts) => {
    res.status(200).json({
      accounts: accounts
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

exports.createAccount = (req, res, next) => {
  const requestAccount = {
    description: req.body.description,
    email: req.body.email,
    industry: req.body.industry,
    organization_city: req.body.organization_city,
    organization_country: req.body.organization_country,
    organization_name: req.body.organization_name,
    password: req.body.password,
    username: req.body.username,
  };

  const newAccount = new Account(requestAccount);
  newAccount.save().then((createdAccount) => {
    res.status(201).json({
      message: 'Account created successfully',
      account: { id: new Date().toISOString(), ...createdAccount }
    });
  }).catch((error) => {
    res.status(400).json({
      error: error
    });

    next(error);
  }
  );
}