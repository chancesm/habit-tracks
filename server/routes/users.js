const Router = require('express').Router;
const router = new Router();
const User = require(__dirname + '/../db').User;

module.exports = router;

router.post('/:id', (req,res) => {
    //console.log('Hello World')
    User.findByIdAndUpdate(req.params.id,req.body,{select: ['-password'],new:true})
    //.select('-password')
    .then(data => {
        //console.log(data)
        res.json(data)
    })
})