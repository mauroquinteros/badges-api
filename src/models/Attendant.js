const pool = require("../config/db");

class Attendant {
  static table = "attendants";
  static id_attendant = "id_attendant";
  static first_name = "first_name";
  static last_name = "last_name";
  static email = "email";
  static twitter_user = "twitter_user";
  static avatar_url = "avatar_url";
  static id_job = "id_job";

  static async getAttendants() {
    try {
      const query = `SELECT * FROM ${this.table}`;
      const result = await pool.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAttendantById(id) {
    try {
      const query = `SELECT * FROM ${this.table} WHERE ${this.id_attendant} = ?`;
      const params = [id];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createAttendant(...values) {
    try {
      const query = `INSERT INTO ${this.table}(${this.first_name}, ${this.last_name}, ${this.email}, ${this.twitter_user}, ${this.avatar_url}, ${this.id_job}) VALUES(?, ?, ?, ?, ?, ?)`;
      const params = [...values];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async editAttendant(...values) {
    try {
      const query = `UPDATE ${this.table} SET ${this.first_name} = ?, ${this.last_name} = ?, ${this.email} = ?, ${this.twitter_user} = ?, ${this.avatar_url} = ?, ${this.id_job} = ? WHERE ${this.id_attendant} = ?`;
      const params = [...values];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAttendant(id) {
    try {
      const query = `DELETE FROM ${this.table} WHERE ${this.id_attendant} = ?`;
      const params = [id];
      const result = await pool.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAttendantByJob(id) {
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

module.exports = Attendant;
