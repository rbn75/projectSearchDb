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
//   if(roles.includes(req.user.role==='employer')){
//     res.redirect('/employer')
//   } 
//   if(roles.includes(req.user.role==='guest')){
//     res.redirect('/guest')
//   } 
//   else {
//     res.redirect('/')
//   }
// }


exports.isNotAuth=(req, res, next)=>{
  if(!req.isAuthenticated()){
    next()
  }else{
    res.redirect('/')
  }
}


