const router = require('express').Router();

var login;

router.route('/login').post((req, res) => {
    login = true;
    res.json("Login");
});

router.route('/logout').post((req, res) => {
    login = false
    res.json('Logout');
});

router.route('/status').get((req, res) => {
    if (login == true) {
        res.send("login");
    } else {
        res.send("logout");
    }
});

module.exports = router;