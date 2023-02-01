
/** Inicialmente se ocultan lista de grupos de términos  y de descripciones de una lista descriptiva  */

document.getElementById('uni').style.visibility = 'hidden';
document.getElementById('tecnic').style.visibility = 'hidden';



/** A continuacion se controla el comportamento del boton para volver a la parte superior de la pagina */

const btn_scrolltop = document.getElementById("btn_scrolltop")
  btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
  add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
 if (window.scrollY < 300) {
    btn_scrolltop.classList.remove("btn-scrolltop-on");
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on");
  }
}


/** Con el siguiente codigo se muestra y esconde la lista de grupos de términos y de descripciones  *
 *  de lista descriptiva cunado se preciona el boton utilizando "style.visibility"                  */

document.getElementById("universidad").addEventListener('click', function () {
  let id_dato = uni.id ;
    estadoParrafo(id_dato);
});

document.getElementById("secundaria").addEventListener('click', function () {
  let id_dato = tecnic.id ;
  estadoParrafo(id_dato);
});

function estadoParrafo(dato) {
  let displayActual = document.getElementById(dato).style.visibility;
  if (displayActual === 'hidden') {
    document.getElementById(dato).style.visibility = 'visible';
  }
  else {
    document.getElementById(dato).style.visibility = 'hidden';
  }
}