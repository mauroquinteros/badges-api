const Attendant = require("../models/Attendant");

class AttendantController {
  static async getAttendants(req, res) {
    try {
      const result = await Attendant.getAttendants();
      if (result.length > 0) {
        res.json({
          success: true,
          data: result,
        });
      } else {
        res.json({
          success: true,
          data: [],
          message: "Aún no hay ningún participante. Agrega uno!",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async getAttendantById(req, res) {
    try {
      const { id } = req.params;
      const result = await Attendant.getAttendantById(id);
      if (result.length > 0) {
        res.json({
          success: true,
          data: result,
        });
      } else {
        res.json({
          success: true,
          data: [],
          message: `No hay ningun participante con el ID ${id}`,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async createAttendant(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        twitterUser,
        profilePicture,
        idJob,
      } = req.body;
      const { affectedRows, insertId } = await Attendant.createAttendant(
        firstName,
        lastName,
        email,
        twitterUser,
        profilePicture,
        idJob
      );
      if (affectedRows) {
        res.json({
          success: true,
          message: "Participante agregado satisfactoriamente!",
          idAttendant: insertId,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async editAttendant(req, res) {
    try {
      const {
        firstName,
        lastName,
        email,
        twitterUser,
        profilePicture,
        idJob,
      } = req.body;
      const { id } = req.params;
      const { affectedRows } = await Attendant.editAttendant(
        firstName,
        lastName,
        email,
        twitterUser,
        profilePicture,
        idJob,
        id
      );
      if (affectedRows) {
        res.json({
          success: true,
          message: "Participante actualizado satisfactoriamente!",
          idAttendant: id,
        });
      } else {
        res.json({
          success: true,
          message: `No hay ningun participante con el ID ${id}`,
          idAttendant: id,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async deleteAttendant(req, res) {
    try {
      const { id } = req.params;
      const { affectedRows } = await Attendant.deleteAttendant(id);
      console.log(affectedRows);
      if (affectedRows) {
        res.json({
          success: true,
          message: "Participante eliminado satisfactoriamente!",
          idAttendant: id,
        });
      } else {
        res.json({
          success: true,
          message: `El participante con el ID ${id} no existe!`,
          idAttendant: id,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }
}

module.exports = AttendantController;
