const { JobItem } = require('../crud/job-sheet')
const employee=require('../models/Jobs')

exports.createJobView=(req,res)=>res.render('jobscreation')

exports.createJobs=async (req, res)=>{
  const {description,location,pay}=req.body
  await JobItem.create({description,location,pay})
}