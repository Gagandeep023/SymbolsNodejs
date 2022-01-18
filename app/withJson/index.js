const express = require('express');

const router = express.Router();
const fileController = require('./symbol.controller');

router.get('/id/:id',
    fileController.getFile);

router.put('/property/:id',
    fileController.putFile);

router.patch('/id/:id',
    fileController.patchFile);

router.delete('/id/:id',
    fileController.deleteFile);

module.exports = router;