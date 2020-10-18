const Job = require('../models/Job')

class JobController {
  static async getJobs(req, res) {
    try {
      const result = await Job.getJobs()
      if (result.length > 0) {
        res.json({
          success: true,
          data: result
        })
      } else {
        res.json({
          success: true,
          data: [],
          message: 'There are no jobs yet. Insert one!'
        })
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message
      })
    }
  }

  static async getJobById(req, res) {
    try {
      const { id } = req.params
      const result = await Job.getJobById(id)
      if (result.length > 0) {
        res.json({
          success: true,
          data: result,
        })
      } else {
        res.json({
          success: true,
          data: [],
          message: 'There is no any job with that id!'
        })
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message
      })
    }
  }

  static async createJob(req, res) {
    try {
      const {jobTitle} = req.body
      const {affectedRows, insertId} = await Job.createJob(jobTitle)
      if(affectedRows) {
        res.json({
          success: true,
          message: 'Job added successfully!',
          idJob: insertId
        })
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message
      })
    }
  }
}

module.exports = JobController
