//add phone and mail validation

export function validateEmail(mail) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (regex.test(mail)) return (true)
  return false
}

