const md5 = require("md5");

function convertEmailToUrl(strings, ...values) {
  let newString = "";
  strings.forEach((string, index) => {
    newString += string;
    newString += values[index] ? md5(values[index]) : "";
  });
  return newString;
}

function convertAvatar(email) {
  const avatarUrl = convertEmailToUrl`https://www.gravatar.com/avatar/${email}?d=identicon`;
  return avatarUrl;
}

function deleteProperty(object, prop) {
  const newObject = Object.keys(object).reduce((obj, key) => {
    if (key !== prop) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
  return newObject;
}

function convertAttendatToJson(attendants, jobs) {
  const attendantJson = attendants.map((attendant) => {
    // Find the job that is related to the current attendant
    const job = jobs.find((job) => job.id_job === attendant.id_job);

    // Delete the id_job property of the current attendant
    const newAttendant = deleteProperty(attendant, "id_job");

    return {
      ...newAttendant,
      job,
    };
  });
  return attendantJson;
}

module.exports = {
  convertAvatar,
  convertAttendatToJson,
};
