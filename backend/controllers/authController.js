const jwt = require('jsonwebtoken');

exports.auth = async (req, res) => {
    const token = jwt.sign({ username: req.user.username }, process.env.JWT_SECRET);
    res.json({token});
}