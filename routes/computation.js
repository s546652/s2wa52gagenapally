var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x =0.5;
    //var random=Math.random();
    console.log(req.query.x);
    x=req.query.x;

    if(x==undefined)
        x=10;
    var y = 5
    let cbrt=Math.hypot(x,y);
    //res.render('computation',{title:'Computation',values:' applied to '+x+' is '+cbrt});
    var c =7.6
    let atan2 =Math.ceil(c);
    //res.render('computation',{title:'Computation',values:' applied to 0.5'+' is '+atan2});
    
    //if(x==undefined)
    var a=0;

    let atanh =Math.clz32(a);
    res.render('computation', {
        title: 'Computation',
        values: 'applied to ' + x +','+y+ 'is '+ cbrt ,
        v1: 'applied to ' + x + ' is ' + atan2,
        v2: 'applied to ' + a + ' is ' + atanh,
      });
    

});

module.exports = router;