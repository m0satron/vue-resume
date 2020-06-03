"use strict";

const validateEmail = function(mail) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(mail)) return true;
  console.error(`Invalid email, you typed: ${mail}`)
  return false;
}

const validatePhone = function (phone) {
  const regex = /^\d{10}$/;
  if (regex.test(phone)) return true;
  console.error(`Invalid phone, you typed: ${phone}`)
  return false;
}

module.exports = {
  validateEmail, validatePhone
}