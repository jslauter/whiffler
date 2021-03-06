const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')


const UserSchema = new Schema({
    email: {
        type: String,
    },
    score: {
        type: Number,
    },
    rank: {
        type: Number,
    },
    username: {
        type: String,
        unique: true,
    },
    googleId: {
        type: String,
        unique: true
    },
    thumbnail:{
        type: String
    },
    password:{
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema);