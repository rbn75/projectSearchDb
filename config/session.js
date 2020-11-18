const session=require('express-session');
const MongoStore=require('connect-mongo')(session)
const mongoose=require('mongoose')
// added...in case trouble
mongoose.set('useCreateIndex', true);

module.exports =app =>{
  app.use(
    session({
      secret:'qwerty1234',
      store:new MongoStore({mongooseConnection: mongoose.connection}),
      resave:true,
      saveUninitialized:true,
    })
  )
}