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
    
    let atan2 =Math.atanh(x);
    res.render('computation',{title:'Computation',values:' applied to 0.5'+' is '+atan2});
    
    a=8;b=4;
    let atanh =Math.atan2(a, b);
    res.render('computation', {
        title: 'Computation',
        values: `applied to ` + x + ` is ` + cbrt ,
        v1: `applied to ` + x + ` is ` + atan2,
        v2: `applied to ` + a+b + ` is ` + atanh,
      });
    

});

module.exports = router;