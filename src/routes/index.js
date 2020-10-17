const {Router} = require('express')
const router  = Router()

// Controllers
const JobController = require('../controller/JobController')
const AttendantController = require('../controller/AttendantController')

// Attendant Routes
router.get('/attendants', AttendantController.getAttendants)

// Job Routes
router.get('/jobs', JobController.getJobs)

module.exports = router
