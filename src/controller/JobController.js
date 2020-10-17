const Job = require('../models/Job')

class JobController {
  static async getJobs(req, res) {
    try {
      const result = await Job.getJobs()
      if(result.length > 0) {
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
        message: error
      })
    }
  }
}

module.exports = JobController
