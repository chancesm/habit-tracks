'use strict';
const Habits = require('../models/habitModel');
const Router = require('express').Router;
const router = new Router();
const sequelize = require('sequelize');
const Habit = require(__dirname + '/../db').Habit;
const passport = require('passport')

module.exports = router;
router.use(passport.initialize());
router.use(passport.session());
function authCheck(req,res,next) {
    if(req.user) next()
    else res.status(401).send()
}
router.get('/', authCheck, (req,res) => {
    let userHabits = []
    Habit.find({owner: req.user._id})
    .then(habits=> {
        for(let habit of habits) {
            userHabits.push(habit._doc)
        }
        res.json(userHabits)
    })
    .catch(err => {
        res.json(userHabits)
    })
})
router.post('/', (req,res) => {
    Habit.create(req.body)
    .then(data => {
        res.json(data._doc)
    })
})
router.post('/:id', (req,res) => {
    Habit.findByIdAndUpdate(req.params.id,req.body,{new:true})
    //.select('-password')
    .then(data => {
        //console.log(data)
        res.json(data)
    })
    res.send('Habits PUT route')
})
router.delete('/', (req,res) => {
    res.send('Habits DELETE route')
})

