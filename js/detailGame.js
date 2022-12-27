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

let juegoID=localStorage.getItem('juegoID')
console.log(juegoID)
 
fetch(`http://localhost:3000/games/${juegoID}`) //tomar id
    .then(response => response.json())
    .then(data => {  
    const detallejuegop = document.getElementById('detallejuegop')
    detallejuegop.innerHTML = 
        `<div class="juegoDestacadoTotal">
          <div class="d-flex flex-column">
            <div class="col-lg-12 juegoDestacado d-flex flex-column align-items-center text-center w-100 justify-content-center">
              <h4 class="h-30 py-lg-4 p-4">${data.name}</h4> 
            </div>
            <a href="/" class="col-lg-12">
            <img src="${data.background_image}" alt="Imagen" class="imgdestac">
            </a>
            <div class="col-lg-12 juegoDestacado d-flex flex-column align-items-center text-center w-100 justify-content-center">
              <h4 class="h-20 py-lg-2 p-2"><small>Genero:${data.genres[0].name}</small></h4>
              <p class="h-50 py-lg-4 p-4">Increible juego que no te deja levantarte de la silla por más de 5 minutos.A disfrutarlo con un gran descuento!​</p>
            </div>
          </div>
        </div>
        `
      }
)

fetch(`http://localhost:3000/games/${juegoID}`) //Galeria
    .then(response => response.json())
    .then(data => {
    console.log(data.short_screenshots)
    const track = document.getElementById('track')
    track.innerHTML = '' 
    for (let i=0;i<=((data.short_screenshots.length)-1);i++){
      console.log(i)
      console.log(data.short_screenshots[i].image)
      track.innerHTML +=
      `
      <div class="slick">
        <div>
              <img src="${data.short_screenshots[i].image}" alt="Imagen">
        </div>
      </div>
      `
      }
     }
    )
