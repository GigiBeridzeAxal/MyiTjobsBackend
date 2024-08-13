const DB = require('../modules/jobmodel')
const date = new Date()





const GetJobs = async(req,res) => {
   const getdbjobs = await DB.find().sort({createdAt: -1})
    res.json(getdbjobs)

     
}

const GetUserByJob = async(req,res) => {

    const {id} = req.body
    if(!id) {
        res.json("Id Not Found")
    }else{
    const get = await DB.find({_id:id})
    res.json(get)

    }



}

const PostJobs = async(req,res) => {
   
    const {JobSelection , JobSkill   , Company , by , joblocat , salary } = req.body

    if(!JobSelection || !Company || !JobSkill || !by || !joblocat   ){
        res.json("All Fields Are Mandatory")
    }else{



        const SendData = await DB.create({
            JobSelection,


            Company,


            JobSkill,
            salary,
            by,
            joblocat,
            ago: date.toDateString()
        })
        if(SendData){
            console.log("Data Succesfuly Sended")


           
        }
    }
    

     
}

module.exports = {GetJobs , PostJobs , GetUserByJob}