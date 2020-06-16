// var d=10;
// 
// for (var i=10; i>0; i--){
//     console.log(i);
// }

// console.log('Primer ejercicio');
// for(var a=0; a>=-200; a=a-5){
//     console.log(a);
// }

// console.log('Segundo ejercicio');
// for(var b=500; b>=0; b=b-10){
//     console.log(b);
// }

// console.log('Tercer ejercicio');
// for(var c=-500; c<=0; c=c+50){
//     console.log(c);
// }

// JAVASCRIPT LEE EL CODIGO DE ARRIBA HACIA ABAJO --- RECUERDA ESO SIEMPRE

for(var d=1; d<=100; d++){
    // console.log(d);
    if(d % 3 === 0 && d % 5 ===0){
        console.log(d + ' FizzBuzz');
    }else if (d % 3 === 0){
        console.log(d + ' Fizz');
    }else if (d % 5 === 0){
        console.log(d + ' Buzz');
    }else{
        console.log(d);
    }
}