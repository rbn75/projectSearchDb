const bcrypt = require('bcrypt')
const User = require('../models/User')
const passport = require('../config/passport')

exports.signupView = (req, res) => res.render('auth/signup')

exports.signupViewEmployer = (req, res) => res.render('auth/signupemployer')

// Signup process for guest
exports.signupProcessGuest = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.render('auth/signup', { errorMessage: 'indicate email and password' })
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.render('auth/signup', { errorMessage: 'error' })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  await User.create({
    email,
    password: hashPass,
    
  })
  res.redirect('/guest')
}

// New signup process for employer


exports.signupProcessEmployer = async (req, res) => {
  const { email, password ,} = req.body
  if (!email || !password) {
    return res.render('auth/signupemployer', { errorMessage: 'indicate email and password' })
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.render('auth/signupemployer', { errorMessage: 'error' })
  }
  const salt = bcrypt.genSaltSync(12)
  const hashPass = bcrypt.hashSync(password, salt)
  await User.create({
    email,
    password: hashPass,
    role:'employer',
    
  })
  res.redirect('/employer')
}


exports.loginView = (req, res) => {
  res.render('auth/login', {'errorMessage':req.flash('error')})

},
// the one working good.
  exports.loginProcess = passport.authenticate('local', {
    // here is problem redirect to private view
    
    successRedirect: '/guest',
    failureRedirect: '/login',
    failureFlash:true,
  }),

// new logins

  exports.loginViewEmployer = (req, res) => {
    res.render('auth/login', {'errorMessage':req.flash('error')})
  
  },
  // the one working
    exports.loginProcessEmployer = passport.authenticate('local', {
      // here is problem redirect to private view
      
      successRedirect: '/employer',
      failureRedirect: '/login',
      failureFlash:true,
    }),
  
  // exports.loginProcess = passport.authenticate('local', {
  //   if(req.user.rol === 'guest'){
  //     res.redirect('/guest')
  //   }
  //   else if(req.user.rol==='employer'){
  //     res.redirect('/employer')
  //   }
  // }),



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

 
 

  exports.logout=(req, res)=>{
    req.logout()
    res.redirect('/')
  }

  // functions-controllers for new views
  exports.guestView=(req, res)=>{
    res.render('guest')
  }
  exports.employerView=(req, res)=>{
    res.render('employer')
  }

exports.googleInit=passport.authenticate('google',{
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
})

exports.googleCb=passport.authenticate('google', {
successRedirect:'/guest',  //problem here to redirect
failureRedirect:'/login',
})


  exports.myAccountView = (req, res) => res.render('myAccount')

  exports.addJobsView=(req, res)=>res.render('addjob')

  exports.updateView=(req,res)=>res.render('update-job')


