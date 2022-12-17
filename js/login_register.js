
let regEx_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
let regEx_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g 

const validarPassword = ($password = undefined) => {
  return true
}

const validarEmail = ($email = undefined) => {
  return false
}

const iniciarSecion = () => {
  const $email = document.getElementById("email")
  const $password = document.getElementById("password")

  if(validarPassword() && validarEmail()) {
    //AQUI ENTRA A LA WEB DEL ADMINISTRADOR
  }
}