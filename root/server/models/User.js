const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    watchTime: Number,
    chatActivity: Number,
    donations: Number,
    postActivity: Number,
});

module.exports = mongoose.model('User', userSchema);
