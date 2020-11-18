const { Schema, model } = require('mongoose')


const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    
  },
  role:{
    type:String,
    enum:['guest', 'employer'],
    default:'guest',
  },
  googleID: String,
  slackID: String,

},
  {
    timestamps: true
  }
  );


module.exports = model('User', userSchema)