let regEx_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
let regEx_email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g 
let regEx_txt = /[A-ZÄËÏÖÜÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙ][a-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/g

const form = document.getElementById('form')
  form.addEventListener('submit', evt => {
    evt.preventDefault()
})

const fechaValida = (fecha) => {
  const fechaInicio = new Date('1950-01-01').getTime()
  const fechaFin = new Date('2009-01-30').getTime()
  const fechaElegida = new Date(fecha).getTime()
  return fechaElegida >= fechaInicio && fechaElegida <= fechaFin
}

const passwordValida = (password) => {
  return regEx_pass.test(password)
}

const emailValido = (email) => {
  console.log(regEx_email.test(`email: ${email}`))
  return regEx_email.test(email)
}

const mostrarMensajeEstado = (titulo, mensaje) => {
  const $h1 = document.getElementById('exampleModalLabel').innerText = titulo
  const $p = document.getElementById('modal-body-p').innerText = mensaje
}

const capturarDatos = () => {
  let fecha = document.getElementById('date').value
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  return { email, password, fecha, nombre, apellido, rol: 'usuario', estado: "1"}
}

const iniciarRegistro = () => {
  const unUsuario = capturarDatos()
  console.log(unUsuario.email)
  if(!fechaValida(unUsuario.fecha))
    return alert('ERROR DE CARGA\nRango de fecha inválida')

  else if(!emailValido(unUsuario.email))
    return alert('ERROR DE CARGA\nEl email proporcionado no es válido')

  else if(!passwordValida(unUsuario.password))
    return alert('ERROR DE CARGA\nLa contraseña proporcionada no es válida')
  else {
    fetch('http://localhost:3000/users')
      .then( response => response.json() )
      .then( users => {
        const existe = users.filter( user => unUsuario.email === user.email && unUsuario.password === user.password)
        console.log(existe.length)
        if(existe.length == 1) return mostrarMensajeEstado("USUARIO EXISTENTE", `el usuario ${email} se encuentra registrado`)
      } )  
    
    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(unUsuario),
      headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })
      .then((response) => response.json())
      .then( json => mostrarMensajeEstado("USUARIO REGISTRADO", `El usuario ${email} fue registrado exitosamente`))
  }  
}
