const {Router} = require('express')
const router  = Router()

// Controllers
const JobController = require('../controller/JobController')
const AttendantController = require('../controller/AttendantController')

// Attendant Routes
router.get('/attendants', AttendantController.getAttendants)
router.get('/attendants/:id', AttendantController.getAttendantById)
router.post('/attendants', AttendantController.createAttendant)
router.put('/attendants/:id', AttendantController.editAttendant)
router.delete('/attendants/:id', AttendantController.deleteAttendant)

// Job Routes
router.get('/jobs', JobController.getJobs)
router.get('/jobs/:id', JobController.getJobById)
router.post('/jobs', JobController.createJob)
router.put('/jobs/:id', JobController.editJob)
router.delete('/jobs/:id', JobController.deleteJob)

module.exports = router
