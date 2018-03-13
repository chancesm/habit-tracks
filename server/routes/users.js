'use strict';
const database = require('../database');
const Router = require('express').Router;
const userCtl = require('../controllers/usersController.js')
const router = new Router();
module.exports = router;

// put your code down here
router.get('/', (req,res) => {
    userCtl.getUsers().then(data => {

        res.json(data)
    })
})
router.post('/', (req,res) => {
    res.send('Users POST route')
})
router.put('/', (req,res) => {
    res.send('Users PUT route')
})
router.delete('/', (req,res) => {
    res.send('Users DELETE route')
})

