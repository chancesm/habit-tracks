'use strict'

const authenticate = (req, res, next) => {
    console.log('User Authentication');
    next();
}

module.exports = authenticate;