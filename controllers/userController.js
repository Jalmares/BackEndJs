'use strict';

const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
    const users = await userModel.getAllUsers();
    await res.json(users);
};

/*
const user_get = (req, res) => {
    const userId = parseInt(req.params.id);
    if (userId > users.length || userId <= 0) {
        res.send(`User with ${req.params.id} ID does not exists`);
    } else {
        res.json(users[userId - 1]);
    }
};
 */
const user_get = async (req, res) => {
    const params = [req.params.id];
    const user = await userModel.getUser(params);
    await res.json(user[0]);
};

const user_post = (req, res) => {
  console.log(req.body);
  res.send('kebab');

};

module.exports = {
    user_list_get, user_get, user_post,
};