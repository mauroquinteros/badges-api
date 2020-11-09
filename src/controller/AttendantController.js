const Attendant = require("../models/Attendant");
const Job = require("../models/Job");

// Utils
const { convertAvatar, convertAttendatToJson } = require("../utils/");

class AttendantController {
  static async getAttendants(req, res) {
    try {
      const result = await Attendant.getAttendants();
      if (result.length > 0) {
        const jobs = await Job.getJobs();
        const data = convertAttendatToJson(result, jobs);
        res.json({
          success: true,
          data,
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
        const jobs = await Job.getJobs();
        const data = convertAttendatToJson(result, jobs);
        res.json({
          success: true,
          data,
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
      const { first_name, last_name, email, twitter_user, id_job } = req.body;
      const avatar_url = convertAvatar(email);
      const result = await Job.getJobById(id_job);
      if (result.length > 0) {
        const { affectedRows, insertId } = await Attendant.createAttendant(
          first_name,
          last_name,
          email,
          twitter_user,
          avatar_url,
          id_job
        );
        if (affectedRows) {
          res.json({
            success: true,
            message: "Participante agregado satisfactoriamente!",
            idAttendant: insertId,
          });
        }
      } else {
        res.status(500).json({
          error: true,
          message: `El id ${id_job} del trabajo que agregaste no existe. No podemos crear al participante!`,
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
      const { first_name, last_name, email, twitter_user, id_job } = req.body;
      const { id } = req.params;
      const avatar_url = convertAvatar(email);
      const result = await Job.getJobById(id_job);
      if (result.length > 0) {
        const { affectedRows } = await Attendant.editAttendant(
          first_name,
          last_name,
          email,
          twitter_user,
          avatar_url,
          id_job,
          id
        );
        if (affectedRows) {
          res.json({
            success: true,
            message: "Participante actualizado satisfactoriamente!",
            idAttendant: id,
          });
        } else {
          res.status(500).json({
            error: true,
            message: `No hay ningun participante con el ID ${id}`,
            idAttendant: id,
          });
        }
      } else {
        res.status(500).json({
          error: true,
          message: `El ID ${id_job} del trabajo que agregaste no existe. No podemos editar al participante!`,
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
      if (affectedRows) {
        res.json({
          success: true,
          message: "Participante eliminado satisfactoriamente!",
          idAttendant: id,
        });
      } else {
        res.status(500).json({
          error: true,
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
