const express = require('express');
const passport = require('passport');
const subscribeController = require('./../controllers/subscribeController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/subscribe', subscribeController.subscribe);
router.get('/admin', passport.authenticate('jwt', {session: false}), subscribeController.get);

router.post('/login', passport.authenticate('local', {session: false}), authController.auth);

module.exports = router;