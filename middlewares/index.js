exports.isAuth=(req, res, next)=>{
  if(req.isAuthenticated()){
    next()
  }else{
    res.redirect('/')
  }
}
// middleware for roles
exports.checkRoles= roles=>(req, res, next) =>{
  if(roles.includes(req.user.role)){
    return next()
  } else {
    res.redirect('/')
  }
}


// exports.checkRoles= roles=>(req, res, next) =>{
//   if(req.user.role==='employer'){
//     return res.redirect('/employer')
//   } else {
//     res.redirect('/')
//   }
// }




// exports.checkRoles= roles=>(req, res, next) =>{
//   if(rol.includes(req.user.role==='employer')){
//     res.redirect('/employer')
//   } 
//   if(rol.includes(req.user.role==='guest')){
//     res.redirect('/guest')
//   } 
//   else {
//     res.redirect('/')
//   }
// };

// -----------------------------------------------------------

 // exports.loginProcess = passport.authenticate('local', {
  //   if(req.user.rol === 'guest'){
  //     res.redirect('/guest')
  //   }
  //   else if(req.user.rol==='employer'){
  //     res.redirect('/employer')
  //   }
  // }),


exports.isNotAuth=(req, res, next)=>{
  if(!req.isAuthenticated()){
    next()
  }else{
    res.redirect('/')
  }
}


