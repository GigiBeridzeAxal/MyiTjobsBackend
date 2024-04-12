const mongoose = require('mongoose')


const JobSchema = mongoose.Schema({
   
      Company:{
        type:String,
        required:true,
    
    },

    JobSelection:{
        type:String,
        required:true,
    
    },

    salary:{
        type:Number
        
    
    },
    JobSkill:{
        type:String,
        required:true,
    },


    ago:{
        type:String,
        required:true
    },
    by:{
        type:String,
        required:true
    },
    joblocat:{
        type:String,
        required:true
    }
 
 
 


},{
    timestamps:true
})


module.exports = mongoose.model("JobPosting" , JobSchema)