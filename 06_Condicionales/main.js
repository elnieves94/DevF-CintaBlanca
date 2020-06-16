// alert('hola');
// var num1 = prompt('Ingresa un número')
// var num2 = Number(num1);

// if(num1 % 2 === 0){
//     // si la división entre 2 del num1, el residuo es igual a 0, entonces es par
//     console.log(num1 + ': es par');
// }else if(num1 % 2 === 1){
//     // si la división entre 2 del num1, el residuo es igual a 1, entonces es impar
//     console.log(num1 + ': es impar');
// }else{
//     console.error('Es un error, checa tus datos');
// }
// var user = prompt('Introduce tu usuario')
// var pass = prompt('Introduce tu contraseña')

// if(pass === 'perrito123'){
//     console.log('Bienvenido ' + user + ' !');
// }else{
//     console.log('Contraseña incorrecta, intenta nuevamente');
// }

// var playerOne = prompt('Jugador uno, elige: piedra, papel o tijera').toLowerCase();
// var playerTwo = prompt('Jugador dos, elige: piedra, papel o tijera').toLowerCase();

// if(playerOne === 'piedra' && playerTwo === 'piedra'){
//     console.log('empate! ambos eligieron piedra');
// } else if (playerOne === 'papel' && playerTwo === 'papel'){
//     console.log('empate! ambos eligieron papel');
// } else if (playerOne === 'tijera' && playerTwo === 'tijera'){
//     console.log('empate! ambos eligieron tijera');
// } else if (playerOne === 'piedra' && playerTwo === 'tijera'){
//     console.log('Gana jugador 1! piedra le gana a tijera');
// } else if (playerOne === 'tijera' && playerTwo === 'papel'){
//     console.log('Gana jugador uno! tijera le gana a papel');
// } else if (playerOne === 'papel' && playerTwo === 'piedra'){
//     console.log('Gana jugador uno! papel le gana a piedra');
// } else if (playerOne === 'piedra' && playerTwo === 'papel'){
//     console.log('Gana jugador dos! papel le gana a piedra');
// } else if (playerOne === 'tijera' && playerTwo === 'piedra'){
//     console.log('Gana jugador dos! piedra le gana a tijera');
// } else if (playerOne === 'papel' && playerTwo === 'tijera'){
//     console.log('Gana jugador dos! tijera le gana a papel');
// }else{
//     console.error('verifiquen sus datos...')
// }

var playerUno = prompt('piedra, papel o tijera?').toLowerCase();
var playerDos = '';

var option = Math.floor((Math.random() * 3) + 1);
// console.log(option);

if(option === 1){
    playerDos = 'piedra'
}
if(option === 2){
    playerDos = 'papel'
}
if(option === 3){
    playerDos = 'tijera'
}

if (playerUno === playerDos){
    document.write('empate! ambos eligieron: ' + playerUno);
    console.log(playerUno);
    console.log(playerDos);
} else if (playerUno === 'piedra' && playerDos === 'tijera' || playerUno === 'tijera' && playerDos === 'papel' || playerUno === 'papel' && playerDos === 'piedra'){
    document.write('gana el jugador uno, porque elegiste: ' + playerUno);
    console.log(playerUno);
    console.log(playerDos);
} else if (playerDos === 'piedra' && playerUno === 'tijera' || playerDos === 'tijera' && playerUno === 'papel' || playerDos === 'papel' && playerUno === 'piedra'){
    document.write('gana la computadora, porque eligió: ' + playerDos);
    console.log(playerUno);
    console.log(playerDos);
}else{
    console.error('ingresa nuevamente tus datos');
    document.write('ingresa nuevamente tus datos')
}
