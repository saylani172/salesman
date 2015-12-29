var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var schema = require("./schema");
var usersModel = schema.usersModel;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

router.post('/signup', function (req, res) {
    usersModel.findOne({userName: req.body.userName}, function (err, data) {
        var user = new usersModel(req.body);
        user.save(function (err, success) {
            res.send(err || success);
        });
    });
});
router.post('/login', function (req, res) {
    usersModel.findOne({userName: req.body.userName, password: req.body.password}, function (err, success) {
        res.send(success || err);
    });
});

module.exports = router;
