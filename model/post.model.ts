const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = mongoose.model('Post', new Schema({
    content: {
        type: String,
        maxlength: 300,
        minLength: 10,
        required: true
    },
}))

module.exports = Post;