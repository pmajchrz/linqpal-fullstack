const mongoose = require('mongoose');
const Subscription = mongoose.model('Subscription');

exports.get = async (req, res) => {
    const all = await Subscription.find({});
    res.json(all);
}

exports.subscribe = async (req, res) => {
    const sub = await new Subscription(req.body).save();
    res.json(sub);
};