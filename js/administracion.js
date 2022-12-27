

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
                            <td class='text-bold'>${game.released}</td>
                            <td class='text-bold'>
                              <i id='${game.id}' class ="bi bi-trash fs-2" onclick="deleteGame(this)"></i>
                              <i id='${game.id}' class ="bi bi-pencil-square fs-2"></i>
                              <i id='${game.id}' class ="bi bi-star-fill fs-2" onclick="highlightGame(this)"></i>
                            </td>
                        `
      tableBody.appendChild(gameRow)
    });
  });
}

const capturarDatos = () => {
  console.log(document.getElementById("categoria").value)
  let name = document.getElementById("name").value
  let genres = [ { name: document.getElementById("categoria").value } ]
  let description = document.getElementById("descripcion").value
  let background_image = document.getElementById("imagen").value
  let isFavorite = document.getElementById("publicado").value
  let released = document.getElementById('fecha').value
  return { background_image, genres: genres, isFavorite, name, released, description }
}


const crearJuego = async () => {
  const nuevoJuego = capturarDatos();
  await fetch('http://localhost:3000/games', {
      method: 'POST',
      body: JSON.stringify(nuevoJuego),
      headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })
      .then( response => response.json())
      .then( json => {
        cargarJuegos()
        alert(`El juego ${nuevoJuego.name} fue creado exitosamente`)
        window.location.reload()
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

const highlightGame = i => {
  i.classList.toggle("destacated")
}