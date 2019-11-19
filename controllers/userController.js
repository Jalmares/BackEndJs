'use strict';

const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
    res.json(users);
};

const user_get = (req, res) => {
    const userId = parseInt(req.params.id);
    if (userId > users.length || userId <= 0) {
        res.send(`User with ${req.params.id} ID does not exists`);
    } else {
        res.json(users[userId - 1]);
    }
};

const user_post = (req, res) => {
  console.log(req.body);
  res.send('kebab');

};

module.exports = {
    user_list_get, user_get, user_post,
};