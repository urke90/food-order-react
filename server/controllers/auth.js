exports.getLogin = (req, res, next) => {
    console.log('get login crtl', req.session.isLoggedIn);
};

exports.getSignup = (req, res, next) => {};

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    console.log('post login ctrl', req.session);

    res.redirect('/');
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
};

exports.postLogout = (req, res, next) => {
    return req.session.destroy((err) =>
        console.log('ERROR logout session destroy()', err)
    );
};
