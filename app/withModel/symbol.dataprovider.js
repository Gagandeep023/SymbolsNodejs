'use strict';
const queryPool = require('../model/db.connection');

const symbolsDp = {

    postDetails: (name, symbols) => {
      let sql = `INSERT INTO symbols (name, symbol) VALUES ('${name}', '${symbols}')`;
      return queryPool(sql);
  },
    getDetails:  (id) => {
      let sql = `SELECT * from symbols WHERE id = ${id}`;
      return queryPool(sql);
  },
    putDetails: async (id, name, symbol) => {
        let sql = `UPDATE symbols SET name = '${name}', symbol = '${symbol}' WHERE id = '${id}'`;
        return  queryPool(sql);
    },
    patchDetails: async (id, symbol) => {
        let sql = `UPDATE symbols SET symbol = '${symbol}' WHERE id = '${id}'`;
        return  queryPool(sql);
    },
    deleteDetails: async (id) => {
        let sql = `DELETE from symbols WHERE id = '${id}'`;
        return  queryPool(sql);
    },
};

module.exports = symbolsDp;