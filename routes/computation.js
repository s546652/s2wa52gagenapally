var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x =0.5;
    //var random=Math.random();
    console.log(req.query.x);
    x=req.query.x;

    if(x==undefined)
        x=0.5;

    let cbrt=Math.cbrt(x);
    res.render('computation',{title:'Computation',values:' applied to '+x+' is '+cbrt});
    let atan2=Math.atan2(x);
    res.render('computation',{title:'Computation',values:' applied to '+x+' is '+atan2});
    let atanh=Math.atanh(8,4);
    res.render('computation',{title:'Computation',values:' applied to '+x+' is '+atanh});
});

module.exports = router;