/*
*  Archivo main.js
*  Creado por: Orlando Arboleda Molina
*  Fecha: 5-Julio-2024
*
*  Descripción: 
*  Logico frontEnd para suministrar datos JSON, 
*  para el curso de EDyA1 en la Universidad Autónoma de Occidente
*/

const formElement = document.getElementById("generarTransaccion");
const resultadoElement = document.getElementById("resultado");

formElement.addEventListener('submit', async (event) =>{
    // para que no se recarge la pagina
    event.preventDefault();
    let nombre = document.getElementById("elNombre").value;
    let prestamo = document.getElementById("elPrestamo").value;
    let meses = document.getElementById("losMeses").value;
    let interes = document.getElementById("elInteres").value;
    
    let transaction = { nombre, prestamo, meses, interes, accion: 'CalcularCuota' };
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);
    try {
        const response = await fetch('http://localhost:3000/transactions',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'            
              },
            body: transactionJson
        });

        if (!response.ok) {
            resultadoElement.value = 'Error: ' + response.status;
            return;
        }

        const data = await response.json();

        const cuota = Number(data.cuota).toFixed(2);
        const interes_percentage = Number(data.interes * 100).toFixed(2);
        resultadoElement.value = data.nombre + ' - $' + cuota + ' -- $' + data.prestamo + ' -- ' + data.meses + ' meses -- interes ' + interes_percentage + '%';
    } catch (error) {
        resultadoElement.value = 'Error de red: ' + error.message;
    }
});