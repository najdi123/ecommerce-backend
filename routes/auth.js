const express = require('express');
const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin
    } = require('../controllers/auth');
const { userSignupValidator } = require('../validator/index');

//Signing up user
router.post('/signup', userSignupValidator, signup);

//Sign in
router.post('/signin', signin);

//Sign out
router.get('/signout', signout);

//auth req address
router.get('/hello', requireSignin ,(req, res) => {
    res.send("hello authorized person")
});

module.exports = router;
