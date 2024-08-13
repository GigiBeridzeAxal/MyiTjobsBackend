const express = require('express')
const { GetJobs, PostJobs, GetUserByJob } = require('../controllers/jobcontroller')
const sendmail = require('../controllers/NodeMailer')
const router = express.Router()



router.get('/' , GetJobs)
router.post('/' , PostJobs)
router.post('/sendmail' , sendmail)
router.post('/GetUserByJob', GetUserByJob)


module.exports = router
