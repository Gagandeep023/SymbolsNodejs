
const fileController = {};
const SymbolServices = require('./symbol.service');


fileController.getFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    try {
        const response = await SymbolServices.getSymbols(id);
        res.send(response);
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };

  fileController.postFile = async (req, res) => {
    const name = req.body.name;
    const symbol = req.body.symbol;
    try {
        const response = await SymbolServices.postSymbols(name, symbol);
        res.send(response);
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };
  fileController.deleteFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    try {
        const response = await SymbolServices.deleteSymbols(id);
        // return response;
        res.send(response);
        res.json({ message: `Symbol with id #${id} has been deleted` });
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };

  fileController.putFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const name = req.body.name;
    const symbol = req.body.symbol;


    try {
        const response = await SymbolServices.putSymbols(id, name, symbol);
        // return response;
        res.send(response);
      return res;
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };
  fileController.patchFile = async (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const symbol = req.body.symbol;

    try {
      const response = await SymbolServices.patchSymbols(id, symbol);
        // return response;
        res.send(response);
      return res;
    } catch (err) {
      return 'Unhandled Exception!!';
    }
  };
  module.exports = fileController;