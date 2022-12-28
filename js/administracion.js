let ID_GAME
let tableBody = document.getElementById('TableAdminBody')

const cargarJuegos = async () => {
  await fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(games => {
    console.log()
    games.forEach( (game) => {
      let gameRow = document.createElement('tr');
      gameRow.scope = 'row'
      gameRow.innerHTML = `
                            <td class='text-bold'>${game.id}</td>
                            <td class='text-bold'>${game.name}</td>
                            <td class='text-bold'>${game.genres[0]?.name}</td>
                            <td class='text-bold'>${game.released}</td>
                            <td class='text-bold'>
                              <i id='${game.id}' class ="bi bi-trash fs-2" onclick="deleteGame(this)"></i>
                              <i id='${game.id}' class ="bi bi-pencil-square fs-2" data-bs-toggle="modal" data-bs-target="#modalActualizacion" onclick="cargarJuego(this)"></i>
                              <i id='${game.id}' class ="bi bi-star-fill fs-2" onclick="highlightGame(this)"></i>
                            </td>
                        `
      tableBody.appendChild(gameRow)
    });
  });
}

const cargarAvatar = () => {
  let a = document.getElementById('avatar').innerHTML = "Administrador"
}

const capturarDatos = () => {
  let name = document.getElementById("name").value
  let genres = [ { name: document.getElementById("categoria").value } ]
  let description = document.getElementById("descripcion").value
  let background_image = document.getElementById("imagen").value
  let isFavorite = document.getElementById("publicado").value
  let released = document.getElementById('fecha').value
  console.log(genres[0])
  return { background_image, genres, isFavorite, name, released, description }
}

const form = document.getElementById('form')
form.addEventListener('submit',  (event) => {
  event.preventDefault()
})



const crearJuego = async () => {
  const nuevoJuego = capturarDatos();
  await fetch('http://localhost:3000/games', {
      method: 'POST',
      body: JSON.stringify(nuevoJuego),
      headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })
      .then( response => response.json())
      .then( json => {
        alert(`El juego ${nuevoJuego.name} fue creado exitosamente`)
      })
}

const cargarJuego = element => {
  ID_GAME = element.id
  fetch(`http://localhost:3000/games/${element.id}`)
    .then(res => res.json())
    .then(game => {
      let id = document.getElementById('idGame').value = game.id 
      let nombre = document.getElementById('nameGame').value = game.name 
      let categoria = document.getElementById('categoriaGame').value = game.genres[0].name
      let fecha = document.getElementById('fechaGame').value = game.released
    })
}

const actualizarJuego = () => {
  fetch(`http://localhost:3000/games/${ID_GAME}`)
    .then(res => res.json())
    .then(game => {
      game.name = document.getElementById('nameGame').value
      game.genres[0].name = document.getElementById('categoriaGame').value
      game.released = document.getElementById('fechaGame').value

      fetch(`http://localhost:3000/games/${ID_GAME}`, {
        method: 'PUT',
        body: JSON.stringify(game),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          window.location.reload()
          cargarJuegos()
        });
    })
  
}


function deleteGame(element) {
  const isDelete = confirm('Estas seguro que deseas eleminar el elemento?')
  if (isDelete){
    fetch(`http://localhost:3000/games/${element.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then( () => { window.location.reload() })
  }
}

cargarJuegos()
cargarAvatar()