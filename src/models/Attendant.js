const pool = require('../config/db')
const Job = require('../models/Job')

class Attendant {
  static tableName = 'attendants'
  static idAttendantLabel = 'id_attendant'
  static firstNameLabel = 'first_name'
  static lastNameLabel = 'last_name'
  static emailLabel = 'email'
  static twitterUserLabel = 'twitter_user'
  static profilePictureLabel = 'profile_picture'
  static idJobLabel = 'id_job'

  static async getAttendants() {
    try {
      const query = `SELECT * FROM ${this.tableName}`
      const result = await pool.query(query)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getAttendantById(id) {
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE ${this.idAttendantLabel} = ?`
      const params = [id]
      const result = await pool.query(query, params)
      return result
    } catch (error) {
      throw error
    }
  }

  static async createAttendant(...values) {
    try {
      const idJob = values[values.length-1]
      const result = await Job.getJobById(idJob)

      // Validate if the job id exists
      if(result.length > 0) {
        const query = `INSERT INTO ${this.tableName}(${this.firstNameLabel}, ${this.lastNameLabel}, ${this.emailLabel}, ${this.twitterUserLabel}, ${this.profilePictureLabel}, ${this.idJobLabel}) VALUES(?, ?, ?, ?, ?, ?)`
        const params = [...values]
        const result = await pool.query(query, params)
        return result
      } else {
        throw new Error(`the id_job that are you trying to add doesn't exist`)
      }
    } catch (error) {
      throw error
    }
  }
}

module.exports = Attendant
