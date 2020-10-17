const Attendant = require('../models/Attendant')

class AttendantController {
  static async getAttendants(req, res) {
    try {
      const result = await Attendant.getAttendants()
      if(result.length > 0) {
        res.json({
          success: true,
          data: result
        })
      } else {
        res.json({
          success: true,
          data: [],
          message: 'There are no attendants yet. Insert one!'
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

module.exports = AttendantController
