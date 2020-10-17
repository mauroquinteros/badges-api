const pool = require('../config/db')

class Job {
  static tableName = 'jobs'

  static async getJobs() {
    try {
      const query = `SELECT * FROM ${this.tableName}`
      const result = await pool.query(query)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = Job
