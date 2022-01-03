const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                const error = new Error('User doesnt exit');
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then((isEqual) => {
            if (!isEqual) {
                const error = new Error('wrong password');
                error.statusCode = 401;
                throw error;
            }
            // jwt token check do
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString()
                },
                'secret key',
                { expiresIn: '1h' }
            );

            res.json({
                token: token,
                userId: loadedUser._id.toString()
            });
        })
        .catch((err) => console.log('error logging in user'));
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    bcrypt
        .hash(password, 12)
        .then((hashedPw) => {
            const user = new User({
                name: name,
                email: email,
                password: hashedPw
            });
            return user.save();
        })
        .then((result) => {
            console.log('result creating new User', result);
            res.status(201).json({
                message: 'User created successfully',
                userId: result._id
            });
        })
        .catch((err) => console.log('error bycript pw', err));
};

exports.postLogout = (req, res, next) => {
    return req.session.destroy((err) =>
        console.log('ERROR logout session destroy()', err)
    );
};
