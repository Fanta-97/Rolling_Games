
let regEx_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
let regEx_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g 

const mostrarMensajeEstado = (titulo, mensaje) => {
  const $h2 = document.getElementById('exampleModalLabel').innerText = titulo
  const $p = document.getElementById('modal-body-p').innerText = mensaje
}

const validarPassword = ($password = undefined) => {
  return regEx_pass.test($password)
}

const validarEmail = ($email = undefined) => {
  return regEx_email.test($email)
}

const iniciarSecion = () => {
  const $email = document.getElementById("email").value
  const $password = document.getElementById("password").value
  const btnRegistro = document.getElementById('btnRegistro')
  const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
  

  let titulo, mensaje

  if(!validarEmail($email))
    return mostrarMensajeEstado('ERROR DE CARGA', 'El email proporcionado no es valido')
  if(!validarPassword($password))
    return mostrarMensajeEstado('ERROR DE CARGA', 'La password proporcionada no es valida')
  myModal.show();
  fetch("http://localhost:3000/users")
  .then(response => response.json())
  .then( users => {
    const newUser = users.filter(user => {
      const {email, password} = user
      return email === $email && password === $password
      })
    if(!newUser.length) {
      titulo = "USUARIO INEXISTENTE"
      mensaje = `el usuario ${$email} no existe`
      return mostrarMensajeEstado(titulo, mensaje)
    }
    newUser[0].rol === 'usuario' 
      ? window.open(`./pages/mainPage.html`,"_self")
      : (mostrarMensajeEstado(`BIENVENIDO`, `Bienvenido ${$email}`),
        window.open(`./pages/administracion.html`, "_self"))
  })
  
}