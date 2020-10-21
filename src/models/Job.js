const pool = require("../config/db");

class Job {
  static table = "jobs";
  static id_job = "id_job";
  static job_title = "job_title";

  static async getJobs() {
    try {
      const query = `SELECT * FROM ${this.table}`;
      const result = await pool.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getJobById(id) {
    try {
      const query = `SELECT * FROM ${this.table} WHERE ${this.id_job} = ?`;
      const params = [id];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createJob(...values) {
    try {
      const query = `INSERT INTO ${this.table}(${this.job_title}) VALUES(?)`;
      const params = [...values];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async editJob(...values) {
    try {
      const query = `UPDATE ${this.table} SET ${this.job_title} = ? WHERE ${this.id_job} = ?`;
      const params = [...values];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteJob(id) {
    try {
      const query = `DELETE FROM ${this.table} WHERE ${this.id_job} = ?`;
      const params = [id];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Job;
