const pool = require('../config/db')

class Job {
  static tableName = 'jobs'
  static idJobLabel = 'id_job'
  static jobTitleLabel = 'job_title'

  static async getJobs() {
    try {
      const query = `SELECT * FROM ${this.tableName}`
      const result = await pool.query(query)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getJobById(id) {
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE ${this.idJobLabel} = ?`
      const params = [id]
      const result = await pool.query(query, params)
      return result
    } catch (error) {
      throw error
    }
  }

  static async createJob(...values) {
    try {
      const query = `INSERT INTO ${this.tableName}(${this.jobTitleLabel}) VALUES(?)`
      const params = [...values]
      const result = await pool.query(query, params)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = Job
