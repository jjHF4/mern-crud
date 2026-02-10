const express = require('express');
const router = express.Router();
const controller = require("../controller/controller")

router.get('/', (req,res) => {
    controller.read(req,res)
})

router.post('/', (req,res) => {
    controller.create(req,res)
})

router.put('/', (req,res) => {
    controller.update(req,res)
})

router.delete('/', (req,res) => {
    controller.remove(req,res)
})

module.exports = router;