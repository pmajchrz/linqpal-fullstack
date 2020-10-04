const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(new LocalStrategy((username, password, done) => {
    if (username === process.env.LINQPAL_USERNAME && password === process.env.LINQPAL_PASSWORD) {
        return done(null, {username, password});
    } else {
        return done(null, false);
    }
}));

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(new JwtStrategy(opts, (jwt, done) => {
    if(jwt.username === process.env.LINQPAL_USERNAME){
        return done(null, {jwt});
    }else{
        return done(null, false);
    }
}));