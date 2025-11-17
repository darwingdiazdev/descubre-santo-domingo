// funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionada 
const seleccionar = (link) => {
    const opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className= "";
    opciones[4].className= "";
    opciones[5].className="";
    link.className = "seleccionado";

    // hacemos desaperecer el menu una vez que se ha selecionado una opcion en el modo responsivo 
    const x = document.getElementById("nav");
    x.className="";
}

//funcion que muestra el menu responsive
const responsiveMenu = () => {
    const x = document.getElementById("nav");
    if(x.className===""){
        x.className= "responsive";
    }else{
        x.className = "";
    }
}

// detecto el scrolling para aplicar la animacion de las barras de habilidades 
window.onscroll = function(){
    efectoHabilidades()
}

// funcio que aplicala aimacion de la barra de habilidades 

const efectoHabilidades = () => {
    const skills = document.getElementById("skills");
    const distancia_skills  = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("bd").classList.add("barra-progreso3")
        document.getElementById("bs").classList.add("barra-progreso4")
        document.getElementById("css").classList.add("barra-progreso5")
        document.getElementById("react").classList.add("barra-progreso6")
        document.getElementById("github").classList.add("barra-progreso7")
        document.getElementById("express").classList.add("barra-progreso8")
        document.getElementById("scrum").classList.add("barra-progreso9")
        
    }
}

// carousel.js

const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
let intervalId;

document.addEventListener('DOMContentLoaded', function() {
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  function showItem(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
  }

  function nextItem() {
    currentItem = (currentItem + 1) % items.length;
    showItem(currentItem);
  }

  function prevItem() {
    currentItem = (currentItem - 1 + items.length) % items.length;
    showItem(currentItem);
  }

  nextBtn.addEventListener('click', () => {
    nextItem();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevItem();
    resetInterval();
  });

  function startAutoSlide() {
    intervalId = setInterval(nextItem, 5000); // cada 3 segundos
  }

  function resetInterval() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  startAutoSlide(); // comienza automáticamente
});

// Funcionalidad para las tarjetas flip (click/touch)
document.addEventListener('DOMContentLoaded', function() {
  const flipCards = document.querySelectorAll('.flip-card');
  
  flipCards.forEach(card => {
    card.addEventListener('click', function() {
      const inner = this.querySelector('.flip-card-inner');
      inner.classList.toggle('flipped');
    });
  });
});
