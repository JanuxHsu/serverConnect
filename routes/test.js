var express = require('express');
var router = express.Router();

/* GET test listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(req.connection.remoteAddress);
  res.json({
    from:{
      ip : req.connection.remoteAddress
    },
    data:req.body
  });
});

module.exports = router;
