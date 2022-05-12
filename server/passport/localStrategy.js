const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt'); // 암호화를 위해 가져옴
const { User } = require('../models'); // User 모델 가져옴,

const field = { usernameField: 'Email', passwordField: 'password' };

const verify = async (Email, password, done) => {
  try {
    const user = await User.findOne({
      where: { Email },
    });

    if (!user) return done(null, false, { result: null });

    const result = await bcrypt.compare(password, user.password);

    if (!result) return done(null, false, { result: null });

    return done(null, user);
  } catch (e) {
    console.log(e);
    return done(e);
  }
};

module.exports = () => {
  passport.use('local', new LocalStrategy(field, verify));
};
