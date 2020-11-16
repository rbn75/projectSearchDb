const express = require('express');
const router  = express.Router();
const {signupView, signupProcessGuest, loginView, loginProcess,
   privatePage, logout, testView, guestView, employerView,signupViewEmployer, signupProcessEmployer}=require('../controllers/auth')
const passport=require('../config/passport');
const { route } = require('../app');

// ------------------------ middleware set up
const{ isAuth, isNotAuth, checkRoles }=require('../middlewares')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/signup', isNotAuth, signupView)
router.post('/signup',isNotAuth, signupProcessGuest)



router.get('/signupemployer', isNotAuth,signupViewEmployer )
router.post('/signupemployer',isNotAuth, signupProcessEmployer)


// middleware  isNotAuth config not working---now working!!!
router.get('/login', isNotAuth,loginView )

// router.get('/login',loginView )
router.post('/login',isNotAuth, loginProcess)

// middleware config  working too!!!
router.get('/private',isAuth, privatePage )
// router.get('/private', privatePage )

// routes for roles
router.get('/guest',isAuth, checkRoles(['guest', 'employer']), guestView)

router.get('/employer',isAuth,checkRoles('employer'), employerView)
// add in checkRoles, other role ('employer, 'guest')



router.get('/logout', logout)



router.get('/test', testView)










module.exports = router;
