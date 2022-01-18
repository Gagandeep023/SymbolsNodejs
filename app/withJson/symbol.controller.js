'use strict';

const fileController = {};
const symbols = require('../symbols.json');

fileController.getFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    let flag = true;

    try {
        for (let symbol of symbols) {
            if (symbol.id === id) {
                res.json(symbol);
                flag = false;
            }
        }
        if(flag){
          res.json({ message: `Symbol with id ${id} has not been found` });
        }
    } catch (err) {
      return 
    }
  };

  fileController.deleteFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    let symbol;

    try {
      symbols.forEach((symbol, index) => {
    if (symbol.id === id) {
      symbols.splice(index);
    }
  });
  res.json({ message: `Symbol with id #${id} has been deleted` });
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };

  fileController.putFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    try {
      const symbol = symbols.find(c=> c.id === id);
       if(symbol){
        symbol.symbol = req.body.symbol;
        symbol.name = req.body.name;
        res.send(symbol);
        }
        else
          res.send(`Symbol with id ${id} has not been found` );

      res.send(symbol);
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };
  fileController.patchFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    try {
      const symbol = symbols.find(c=> c.id === id);
      if(symbol){
        symbol.symbol = req.body.symbol;
        res.send(symbol);
      }
        else 
        res.send(`Symbol with id ${id} has not been found` );
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };
  module.exports = fileController;