export function validateEmail(mail) {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  if (regex.test(mail)) return true;
  return false;
}

export function validatePhone(phone) {
  const regex = /^\d{10}$/;
  if (regex.test(phone)) return true;
  return false;
}
