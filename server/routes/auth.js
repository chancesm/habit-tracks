'use strict';
const crypto = require('crypto');
const Router = require('express').Router;
const router = new Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const auth = require(__dirname + '/../controllers/authenticate')
const User = require(__dirname + '/../db').User;


function hashThis(string) {
    let hash = crypto.createHash('sha256');
    hash.update(string)
    return hash.digest('hex');
}
passport.use(new LocalStrategy(function(username, password, done) {
    let hashpass = hashThis(password);
    //query db for user
    User.findOne({username, password: hashpass})
    .select('-password')
    .then(data => {
        return done(null, data._doc);
    })
    .catch(err=>{
        return done(err);
    })
}));
// tell passport how to turn a user into serialized data that will be stored with the session
passport.serializeUser(function(user, done) {
    done(null, user._id);
});
// tell passport how to go from the serialized data back to the user
passport.deserializeUser(function(id, done) {
    User.findById(id,'-password', function(err, user) {
      done(err, user._doc);
    });
});

router.use(passport.initialize());
router.use(passport.session());
module.exports = router;

router.post('/register', (req,res) => {
    //let newUser = new User()
})
router.post('/login',passport.authenticate('local'), (req,res) => {
    res.json(req.user)
})
router.get('/logout', (req,res) => {
    req.logout();
    res.send('Logout Request')
})
router.get('/status', (req,res) => {
    if(req.user) {
        res.json(req.user)
    }
    else res.json({
        user:{}
    })
})

