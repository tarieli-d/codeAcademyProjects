var express = require('express');
var router = express.Router();

router.get(['/:date','/','whoami'], function (req, res, next) {
  var date=req.params.date;
  if(date=='whoami')
    res.json({ipaddress:req.headers['x-forwarded-for'].split(',')[0],language:req.headers['accept-language'],"software":req.headers["user-agent"]})
  var a=new Date(Number(date))
  var b=new Date((date))
  //res.json(date)
  if(date==undefined)
      res.json({"unix":new Date().getTime(),"utc":new Date().toGMTString()})
  if(b!='Invalid Date')
      res.json({unix:b.getTime(),utc:b.toGMTString()})
  if(a!='Invalid Date')
      res.json({unix:Number(date),utc:new Date(Number(date)).toGMTString()})            
  else
    res.json({error : "Invalid Date" })
});

module.exports = router;