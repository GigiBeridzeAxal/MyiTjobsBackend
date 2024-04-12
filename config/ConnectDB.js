const mongoose = require('mongoose')

const ConnectDB = async() => {

    try{
        const con = await mongoose.connect(process.env.DB)
        
        if(con){
            console.log("Database Succesfuly Connected" , con.connection.host)

        }else{
            console.log("Database Cant Connect Try Again Later")
        }
    }catch{
        console.log("Something Went Wrong Please Try Again To Connect Database")
    }
   
     
     

}

module.exports = ConnectDB