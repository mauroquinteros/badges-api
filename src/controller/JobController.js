const Job = require("../models/Job");
const Attendant = require("../models/Attendant");

class JobController {
  static async getJobs(req, res) {
    try {
      const result = await Job.getJobs();
      if (result.length > 0) {
        res.json({
          success: true,
          data: result,
        });
      } else {
        res.json({
          success: true,
          data: [],
          message: "Aún no hay ningún trabajo. Agrega uno!",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async getJobById(req, res) {
    try {
      const { id } = req.params;
      const result = await Job.getJobById(id);
      if (result.length > 0) {
        res.json({
          success: true,
          data: result,
        });
      } else {
        res.json({
          success: true,
          data: [],
          message: `No hay ningun trabajo con el ID ${id}`,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async createJob(req, res) {
    try {
      const { job_title } = req.body;
      const { affectedRows, insertId } = await Job.createJob(job_title);
      if (affectedRows) {
        res.json({
          success: true,
          message: "Trabajo agregado satisfactoriamente!",
          idJob: insertId,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async editJob(req, res) {
    try {
      const { job_title } = req.body;
      const { id } = req.params;
      const { affectedRows } = await Job.editJob(job_title, id);
      if (affectedRows) {
        res.json({
          success: true,
          message: "Trabajo actualizado satisfactoriamente!",
          idJob: id,
        });
      } else {
        res.json({
          error: true,
          message: `No hay ningun trabajo con el ID ${id}`,
          idJob: id,
        });
      }
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error.message,
      });
    }
  }

  static async deleteJob(req, res) {
    try {
      const { id } = req.params;
      await Attendant.deleteAttendantByJob(id);
      const { affectedRows } = await Job.deleteJob(id);
      if (affectedRows) {
        res.json({
          success: true,
          message: "Trabajo eliminado satisfactoriamente!",
          idJob: id,
        });
      } else {
        res.json({
          error: true,
          message: `El trabajo con el ID ${id} no existe!`,
          idJob: id,
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

module.exports = JobController;
