const express = require('express')
const { GetJobs, PostJobs } = require('../controllers/jobcontroller')
const router = express.Router()



router.get('/' , GetJobs)
router.post('/' , PostJobs)


module.exports = router
