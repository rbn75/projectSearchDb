const bcrypt = require('bcrypt');
const { Passport } = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')
const GoogleStrategy=require('passport-google-oauth20').Strategy;


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  const user = await User.findOne({ email })
  if (!user) {
    return done(null, false, { message: 'incorrect email' }) //errorMessage
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return done(null, false, { message: 'incorrect password' })
  }

  done(null, user)
}))

passport.serializeUser((user, cb) => {
  cb(null, user._id)

})

passport.deserializeUser(async (id, cb) => {
  const user = await User.findById(id)
  user.password=null
  cb(null, user)
})

passport.use(new GoogleStrategy({
  clientID:process.env.GOOGLE_ID,
  clientSecret:process.env.GOOGLE_SECRET,
  callbackURL:'/auth/google/callback',
},async(_, __, profile, done)=>{
  const user=await User.findOne({GOOGLE_ID:profile.id})
  if (user){
    return done(null,user)
  }
  const newUser=await User.create({
    GOOGLE_ID:profile.id,
    email: profile.emails[0].value
  })
  done(null, newUser)


}))







module.exports = passport
