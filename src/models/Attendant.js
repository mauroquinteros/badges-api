const pool = require('../config/db')

class Attendant {
  static tableName = 'attendants'

  static async getAttendants() {
    try {
      const query = `SELECT * FROM ${this.tableName}`
      const result = await pool.query(query)
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = Attendant
