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

module.exports = {
  convertAvatar,
};
