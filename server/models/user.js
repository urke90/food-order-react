const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            require: true
        },
        status: {
            type: String,
            default: 'new user'
        }
        // meals: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'Meal'
        // }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
