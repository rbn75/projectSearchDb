const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../config/passport')

exports.signupView = (req, res) => res.render('auth/signup')

exports.signupViewEmployer = (req, res) => res.render('auth/signupemployer')

// Signup process for guest
exports.signupProcessGuest = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.render('auth/signup', { erroMessage: 'indicate email and password' })
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.render('auth/signup', { erroMessage: 'error' })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  await User.create({
    email,
    password: hashPass,
    
  })
  res.redirect('/login')
}

// New signup process for employer


exports.signupProcessEmployer = async (req, res) => {
  const { email, password ,} = req.body
  if (!email || !password) {
    return res.render('auth/signupemployer', { erroMessage: 'indicate email and password' })
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.render('auth/signupemployer', { erroMessage: 'error' })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  await User.create({
    email,
    password: hashPass,
    role:'employer',
    
  })
  res.redirect('/login')
}


exports.loginView = (req, res) => {
  res.render('auth/login', {'errorMessage':req.flash('error')})

},
// the one working
  exports.loginProcess = passport.authenticate('local', {
    // here is problem redirect to private view
    
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash:true
  }),



//   exports.loginProcess = passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     if(req.user.rol === 'guest'){
//     res.redirect('/guest')}
// else {res.redirect('/employer')};
//   })


// -----------------------------------------------------------------------------

// have to change route to auth (problem here)
  exports.privatePage= (req, res)=> {
    if(!req.user) return res.redirect('/')
    res.render('private')
  }

  // middleware set up,something missing...
  // exports.privatePage= (req, res)=> {
  //   res.render('private')
  // }
 

  exports.logout=(req, res)=>{
    req.logout()
    res.redirect('/login')
  }

  // functions-controllers for new views
  exports.guestView=(req, res)=>{
    res.render('guest')
  }
  exports.employerView=(req, res)=>{
    res.render('employer')
  }

  exports.testView = (req, res) => res.render('test')