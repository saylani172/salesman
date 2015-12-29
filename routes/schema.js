var mongoose = require("mongoose");
var connection = mongoose.connect("mongodb://mavia:mavia@ds037205.mongolab.com:37205/salesman");
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require("bcrypt-nodejs");
var SALT_FACTOR = 10;

var usersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

/*
function n() {}
usersSchema.pre("save", function (done) {
    var user = this;
    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        bcrypt.hash(user.password, salt, n, function (err, hashed) {
            user.password = hashed;
            done();
        });
    });
});
*/

usersSchema.plugin(uniqueValidator);
exports.usersModel = mongoose.model("users", usersSchema);
