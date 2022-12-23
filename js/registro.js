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
  let $fecha = document.getElementById('date').value
  console.log($fecha)
  let $nombre = document.getElementById('nombre').value
  let $apellido = document.getElementById('apellido').value
  let $email = document.getElementById('email').value
  let $password = document.getElementById('password').value

  if(!validarDatos($email, $password, $fecha)) 
    return mostrarMensajeEstado('ERROR DE CARGA', 'Los datos proporcionados no son válidos')
  
  fetch( 'http://localhost:3000/users' )
    .then( response => {
      // console.log(response)
      response.json()
    } )
    .then( users => {
      console.log(users)
      // const existe = users.filter( user => {
      //   const {email, password} = user
      //   return email === $email && password === $password
      // })
      // if(existe.length)
      //   return mostrarMensajeEstado("USUARIO EXISTENTE", `el usuario ${$email} se encuentra registrado`)
    } )  

  // fetch("http://localhost:3000/users", {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     email: $email,
  //     password: $password,
  //     fecha: $fecha,
  //     nombre: $nombre,
  //     apellido: $apellido,
  //     rol: 'usuario',
  //     estado: true,
  // }),
  // headers: {
  //   'Content-type': 'application/json; charset=UTF-8',
  // },
  // })
  // .then((response) => {
  //   console.log(response)
  //   response.json()
  // })
  // .then((json) => console.log(json));
}
