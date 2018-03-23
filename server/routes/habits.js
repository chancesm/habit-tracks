'use strict';

const Router = require('express').Router;
const router = new Router();

module.exports = router;

const authCheck = (req, res, next) => {
    if(req.Habit) {
        if(req.Habit.UID = req.params.uid){
            next();
        }
        else(
            res.json({
                msg: "You must own this habit in order to view it."
            })
        )
    }
    else{
        res.json({
            msg: "You must be logged in to view Habits."
        })
    }
}

router.get('/:Habit/[:id]', authCheck, (req,res) => {
    res.send('Habits GET route')
})
router.post('/', (req,res) => {
    res.send('Habits POST route')
})
router.put('/', (req,res) => {
    res.send('Habits PUT route')
})
router.delete('/', (req,res) => {
    res.send('Habits DELETE route')
})

