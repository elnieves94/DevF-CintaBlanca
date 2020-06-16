// guardar variables con las preguntas en los cuadros de texto
let nombre = document.getElementById('nombre')
let telefono = document.getElementById('telefono')
let direccion = document.getElementById('direccion')
let pina = document.getElementById('pina')

// siempre crear variables de las respuestas 
let respnombre = document.getElementById('respnombre')
let resptel = document.getElementById('resptel')
let respdir = document.getElementById('respdir')
let resppina = document.getElementById('resppina')
let pizzapeppe = document.getElementById('peppe')
let pizzahawai = document.getElementById('hawaii')

// variable de la tarjeta
let card = document.getElementById('card')

// variable del boton
let boton = document.getElementById('boton')

// función de cambio, para hacer dinámica mi página
const cambio = () => {
    respnombre.innerHTML = nombre.value;
    resptel.innerHTML = telefono.value;
    respdir.innerHTML = direccion.value;
    resppi.innerHTML = pina.value + ' piña';

    // que todo sea minuscula

    let pregpinia = pina.value;
    let piniaminus = pregpinia.toLowerCase()

    if (piniaminus === "sin"){
        resppina.innerHTML = 'no te gusta la piña?!'
        peppe.classList.remove('none')
        pizzapeppe
    }else if (piniaminus === 'con'){
        resppina.innerHTML = 'qué rico, piña!'
        hawaii.classList.remove('none')
        pizzahawai
    }else{
        resppina.innerHTML = 'checa tus datos'
    }

    // quitar la clase none de la tarjeta de las respuestas
    card.classList.remove('none')

}

// botón para detonar el cambio
boton.addEventListener('click', cambio)
