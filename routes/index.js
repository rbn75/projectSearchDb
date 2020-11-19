const express = require('express');
const router = express.Router();
const { signupView, signupProcessGuest, loginView, loginProcess,
  privatePage, logout, myAccountView , guestView, updateView, employerView,
  signupViewEmployer, signupProcessEmployer,loginViewEmployer, addJobsView,
   loginProcessEmployer, googleInit, googleCb} = require('../controllers/auth')
const passport = require('../config/passport');
const { route } = require('../app');


// ------------------------ middleware set up
const { isAuth, isNotAuth, checkRoles } = require('../middlewares')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/signup', isNotAuth, signupView)
router.post('/signup', isNotAuth, signupProcessGuest)



router.get('/signupemployer', isNotAuth, signupViewEmployer)
router.post('/signupemployer', isNotAuth, signupProcessEmployer)


// middleware  isNotAuth config not working---now working!!!
router.get('/login', isNotAuth, loginView)

// router.get('/login',loginView ) added middleware
router.post('/login', isNotAuth, loginProcess)

// testin logins
router.get('/loginemployer', isNotAuth, loginViewEmployer)
router.post('/loginemployer', isNotAuth, loginProcessEmployer)
// routes for google
router.get('/auth/google', googleInit )
router.get('/auth/google/callback', googleCb)





// routes for roles
router.get('/guest', isAuth, checkRoles(['guest', 'employer']), guestView)

router.get('/employer', isAuth, checkRoles('employer'), employerView)
// add in checkRoles, other role ('employer, 'guest')



router.get('/logout', logout)


// testing routes
router.get('/account', myAccountView )
router.get('/private', isAuth, privatePage)
router.get('/addjob', addJobsView)
router.get('/update', updateView)











module.exports = router;
