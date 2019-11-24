'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    const [rows] = await promisePool.execute('SELECT wop_cat.*, wop_user.name as ownername FROM wop_cat JOIN wop_user ON wop_user.user_id = wop_cat.owner');
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const getCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'SELECT * FROM wop_cat WHERE cat_id = ?;',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const addCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?, ?, ?, ?, ?);',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const updateCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'UPDATE wop_cat SET name = ?, age = ?, weight = ?, owner = ? WHERE cat_id = ?',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error in query?', e.message);
    return {error: 'error in database query'};
  }
};

const deleteCat = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'DELETE FROM wop_cat WHERE cat_id = ?',
        params,
    );
    return rows;
  } catch (e) {
    console.log('error in query?', e.message);
    return {error: 'error in database query'};
  }
};

module.exports = {
  getAllCats,
  getCat,
  addCat,
  updateCat,
  deleteCat,
};