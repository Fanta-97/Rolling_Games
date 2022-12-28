function App() {}

window.onload = function (event) {
  var app = new App();
  window.app = app;
};

App.prototype.processingButton = function(event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector('#track');
  const slick = track.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;
  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

App.prototype.processingButton2 = function(event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track2 = event.currentTarget.parentNode.querySelector('#track2');
  const slick = track2.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;
    
  const trackWidth = track2.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track2.style.left == ""  ? leftPosition = track2.style.left = 0 : leftPosition = parseFloat(track2.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track2) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track2)
}

App.prototype.processingButton3 = function(event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track3 = event.currentTarget.parentNode.querySelector('#track3');
  const slick = track3.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;
    
  const trackWidth = track3.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track3.style.left == ""  ? leftPosition = track3.style.left = 0 : leftPosition = parseFloat(track3.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track3) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track3)
}

App.prototype.processingButton4 = function(event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track4 = event.currentTarget.parentNode.querySelector('#track4');
  const slick = track4.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;
    
  const trackWidth = track4.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track4.style.left == ""  ? leftPosition = track4.style.left = 0 : leftPosition = parseFloat(track4.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track4) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track4)
}

App.prototype.processingButton5 = function(event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track5 = event.currentTarget.parentNode.querySelector('#track5');
  const slick = track5.querySelectorAll('.slick');

  const slickWidth = slick[0].offsetWidth;
    
  const trackWidth = track5.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track5.style.left == ""  ? leftPosition = track5.style.left = 0 : leftPosition = parseFloat(track5.style.left.slice(0, -2) * -1);

  btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track5) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track5)
}



let prevAction = (leftPosition,slickWidth,track) => {
  if(leftPosition > 0) {
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
  if(leftPosition < (trackWidth - listWidth)) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  }
}

fetch('http://localhost:3000/games') // Action
  .then(response => response.json())
  .then(data => {
    const track = document.getElementById('track')
    track.innerHTML = '' 
    data.forEach((item) => {
      if (item.genres[0].name==='Action'){
      track.innerHTML +=
      `
      <div class="slick">
        <div>
          <a href="../pages/detailGame.html" id="${item.id}" target="_blank">
            <h4 onclick="detalleJuego(this)" id="${item.id}">${item.name}<small>${item.genres[0].name}</small></h4>
            <div>
              <img onclick="detalleJuego(this)" src="${item.background_image}" alt="Imagen" id="${item.id}">
            </div>
          </a>
        </div>
      </div>
      `
      }
    })
 })

 fetch('http://localhost:3000/games') // Shooter
  .then(response => response.json())
  .then(data => {
    const track2 = document.getElementById('track2')
    track2.innerHTML = '' 
    data.forEach((item) => {
      if (item.genres[0].name==='Shooter'){
        track2.innerHTML +=
        `
        <div class="slick">
          <div>
            <a href="../pages/detailGame.html" id="${item.id}" target="_blank">
              <h4 onclick="detalleJuego(this)" id="${item.id}">${item.name}<small>${item.genres[0].name}</small></h4>
              <div>
                <img onclick="detalleJuego(this)" src="${item.background_image}" alt="Imagen" id="${item.id}">
              </div>
            </a>
          </div>
        </div>
      `
      }

    })
 })

 fetch('http://localhost:3000/games') // Adventure
  .then(response => response.json())
  .then(data => {
    const track3 = document.getElementById('track3')
    track3.innerHTML = '' 
    data.forEach((item) => {
      if (item.genres[0].name==='Adventure'){
        track3.innerHTML +=
        `
        <div class="slick">
          <div>
            <a href="../pages/detailGame.html" id="${item.id}" target="_blank">
              <h4 onclick="detalleJuego(this)" id="${item.id}">${item.name}<small>${item.genres[0].name}</small></h4>
              <div>
                <img onclick="detalleJuego(this)" src="${item.background_image}" alt="Imagen" id="${item.id}">
              </div>
            </a>
          </div>
        </div>
      `
      }

    })
 })

 fetch('http://localhost:3000/games') // Sports
  .then(response => response.json())
  .then(data => {
    const track4 = document.getElementById('track4')
    track4.innerHTML = '' 
    data.forEach((item) => {
      if (item.genres[0].name==='Sports'){
        track4.innerHTML +=
        `
        <div class="slick">
          <div>
            <a href="../pages/detailGame.html" id="${item.id}" target="_blank">
              <h4 onclick="detalleJuego(this)" id="${item.id}">${item.name}<small>${item.genres[0].name}</small></h4>
              <div>
                <img onclick="detalleJuego(this)" src="${item.background_image}" alt="Imagen" id="${item.id}">
              </div>
            </a>
          </div>
        </div>
        `
      }

    })
 })

 fetch('http://localhost:3000/games') //RPG
  .then(response => response.json())
  .then(data => {
    const track5 = document.getElementById('track5')
    track5.innerHTML = '' 
    data.forEach((item) => {
      if (item.genres[0].name==='RPG'){
        track5.innerHTML +=
        `
        <div class="slick">
          <div>
            <a href="../pages/detailGame.html" id="${item.id}" target="_blank">
              <h4 onclick="detalleJuego(this)" id="${item.id}">${item.name}<small>${item.genres[0].name}</small></h4>
              <div>
                <img onclick="detalleJuego(this)" src="${item.background_image}" alt="Imagen" id="${item.id}">
              </div>
            </a>
          </div>
        </div>
      `
      }

    })
 })


 
 fetch('http://localhost:3000/games') //Juegodestacado
  .then(response => response.json())
  .then(data => {
    const juegodest = document.getElementById('juegodest')
    juegodest.innerHTML = ''
    data.forEach((item) => {
      if (item.isFavorite === true){
        juegodest.innerHTML +=
        `<div class="juegoDestacadoTotal">
          <div class="d-flex flex-lg-row  flex-column">
            <a href="/" class="col-lg-6">
            <img src="${item.background_image}" alt="Imagen" class="imgdestac">
            </a>
            <div class="col-6-lg juegoDestacado d-flex flex-column align-items-center text-center w-100 justify-content-center">
              <h4 class="h-30 py-lg-4 p-4">${item.name}</h4> 
              <h4 class="h-20 py-lg-2 p-2"><small>Genero:${item.genres[0].name}</small></h4>
              <p class="h-50 py-lg-4 p-4">Increible juego que no te deja levantarte de la silla por más de 5 minutos.A disfrutarlo con un gran descuento!​</p>
            </div>
          </div>
        </div>
        `
      }

    })
 })

  const detalleJuego = (Element) => {
    fetch(`http://localhost:3000/games/${Element.id}`) //tomar id
    .then(response => response.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('juegoID' ,Element.id);
})
}

