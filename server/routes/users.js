'use strict';

const Router = require('express').Router;
const router = new Router();

const authenticate = require('../authenticate');
module.exports = router;

router.get('/', authenticate, (req,res) => {
    res.send('Users GET route')
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

