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


