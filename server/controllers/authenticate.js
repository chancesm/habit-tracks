'use strict'

const check = (req, res, next) => {
    console.log('User Authentication');
    next();
}

exports.check = check;