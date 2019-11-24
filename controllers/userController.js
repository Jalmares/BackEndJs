'use strict';
const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
    const users = await userModel.getAllUsers();
    await res.json(users);
};

const user_get = async (req, res) => {
    const params = [req.params.id];
    const user = await userModel.getUser(params);
    await res.json(user[0]);
};

const user_create_post = async (req, res) => {
    const params = [
        req.body.name,
        req.body.email,
        req.body.passwd,
    ];
    const response = await userModel.addUser(params);
    const user = await userModel.getUser([response.insertId]);
    await res.json(user);
};

module.exports = {
    user_list_get,
    user_get,
    user_create_post,
};