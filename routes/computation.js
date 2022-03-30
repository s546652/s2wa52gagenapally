var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x;
    var random=Math.random();
    console.log(req.query.x);
    x=req.query.x;

    if(x==undefined)
        x=random;

    let trunc=Math.cbrt(x);
    res.render('computation',{title:'Computation',values:' applied to '+x+' is '+trunc});
});

module.exports = router;
