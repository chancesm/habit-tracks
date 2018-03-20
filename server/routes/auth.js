'use strict';

const Router = require('express').Router;
const router = new Router();
module.exports = router;

router.post('/login', (req,res) => {
    res.json({'Login Request': req.body})
})
router.get('/logout', (req,res) => {
    res.send('Logout Request')
})


