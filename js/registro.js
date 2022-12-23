let regEx_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
let regEx_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g 
const EDAD_MINIMA_MILISEGUNDOS = 409968000000 //13 años

const fechaValida = (fecha) => {
  const fechaElegida = new Date(fecha).getTime()
  const fechaActual = Date.now()
  return fechaElegida - (fechaActual - EDAD_MINIMA_MILISEGUNDOS) < 0
}

const passwordValida = (password) => {
  return regEx_pass.test(password)
}

const emailValido = (email) => {
  return regEx_email.test(email)
}

const validarDatos = (email, password, fecha) => {
  return passwordValida(password) && emailValido(email) && fechaValida(fecha)
}

const mostrarMensajeEstado = (titulo, mensaje) => {
  const $h1 = document.getElementById('exampleModalLabel').innerText = titulo
  const $p = document.getElementById('modal-body-p').innerText = mensaje
}

const iniciarRegistro = () => {
  let fecha = document.getElementById('date').value
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  if(!validarDatos(email, password, fecha))
    return mostrarMensajeEstado('ERROR DE CARGA', 'Los datos proporcionados no son válidos')
  else {
    fetch('http://localhost:3000/users')
      .then( response => response.json() )
      .then( users => {
        const existe = users.filter( user => {
          const {emailU, passwordU} = user
          return email === emailU && password === passwordU
        })
        if(existe.length == 1) return mostrarMensajeEstado("USUARIO EXISTENTE", `el usuario ${email} se encuentra registrado`)
      } )  
    
    const nuevoUsuario = { email, password, fecha, nombre, apellido, rol: 'usuario', estado: "1", }

    fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify(nuevoUsuario),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
}
