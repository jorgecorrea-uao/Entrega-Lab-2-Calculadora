// OPCIONAL - importa funciones que son exportadas en el archivo utils.js
const misFunciones = require('./scripts/utils')

// importa a express y cors
const express = require('express')
const cors = require('cors')

// crea aplicación usando express y puerto
const app = express()
const port = 3000

let transactionArr = []

//#region 
app.use(
  express.json()
)

app.use(cors());
//#endregion

app.post('/transactions', (req, res) => {  
  console.log('en post');
  const transaction = req.body;
 
  if (transaction.accion == 'CalcularCuota'){
    const nombre = transaction.nombre;
    const prestamo = Number(transaction.prestamo);
    const meses = Number(transaction.meses);
    const interes = Number(transaction.interes) / 100;  // Convierte de porcentaje a decimal
    
    // calcula la cuota mensual
    const cuota = misFunciones.calcularCuota(prestamo, meses, interes);
    
    // Crea objeto JavaScript
    const newData = {nombre, prestamo, meses, interes, cuota};
    console.log(newData)
    // Adiciona el nuevo objeto JavaScript
    transactionArr.unshift(newData);
    return res.status(200).json(newData);
  }

  return res.status(400).json({ error: 'Accion invalida' });
})

// se pone en escucha y despliega el primer mensaje
app.listen(port, () => {
  console.log('Estoy ejecutandome en http://localhost:'+port)
})