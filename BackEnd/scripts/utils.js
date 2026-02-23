/*
*  Archivo utils.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 18-Junio-2024
*
*  Descripción: 
*  Proporciona funciones variadas y generacíon de paginas dinámicas, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/


function calcularCuota(prestamo, meses, interes){
    // cuota = prestamo * ((1 + i)^n * i) / ((1 + i)^n - 1)
    const numerador = Math.pow(1 + interes, meses) * interes;
    const denominador = Math.pow(1 + interes, meses) - 1;
    const cuota = prestamo * (numerador / denominador);
    return cuota;
}

// se indican las funciones a importar
module.exports = {calcularCuota};



