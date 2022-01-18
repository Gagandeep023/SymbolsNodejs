'use strict';

const SymbolServices = {};
const SymbolDp = require('./symbol.dataprovider');


  SymbolServices.getSymbols = async (id) => {
    const response = await SymbolDp.getDetails(id);
    console.log(response);
    return response;
  };
  SymbolServices.postSymbols = async (name, symbol) => {
    const response = await SymbolDp.postDetails(name, symbol);
    console.log(response);
    return response;
  };
  SymbolServices.putSymbols = async (id, name, symbol) => {
    const response = await SymbolDp.putDetails(id, name, symbol);
    return response;
  };
  SymbolServices.patchSymbols = async (id, symbol) => {
    const response = await SymbolDp.patchDetails(id, symbol);
    return response;
  };
  SymbolServices.deleteSymbols = async (id) => {
    const response = await SymbolDp.deleteDetails(id);
    return response;
  };

  module.exports = SymbolServices;