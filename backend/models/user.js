const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    tokens:
    [
        {
            token: {
                type:String,
                require:true
            }
        }
    ]
});

const User = mongoose.model("User",userSchema);
module.exports = User;