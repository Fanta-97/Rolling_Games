

let tableBody = document.getElementById('TableAdminBody')

const cargarJuegos = () => {
  fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(games => {
    console.log(games)
    games.forEach( game => {
      let gameRow = document.createElement('tr');
      gameRow.scope = 'row'
      gameRow.innerHTML = `
                            <td class='text-bold'>${game.id}</td>
                            <td class='text-bold'>${game.name}</td>
                            <td class='text-bold'>${game.genres[0].name}</td>
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

const crearJuego = () => {
  
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































const highlightGame = i => {
  i.classList.toggle("destacated")
}



cargarJuegos()