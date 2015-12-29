var express = require('express');
var router = express.Router();
var schema = require("./schema");
var usersModel = schema.usersModel;
/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.get('/:uid', function (req, res) {
    usersModel.findOne({_id: req.params.uid}, function (err, success) {
        res.send(success || err);
    });
});

module.exports = router;
