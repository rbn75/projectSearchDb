const { Schema, model } = require('mongoose')


const jobSchema = new Schema({
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  pay:{
    type:String,
    enum:['guest', 'employer'],
    default:'guest',
  },
  
},
  {
    timestamps: true
  }
  );


module.exports = model('Jobs', jobSchema)