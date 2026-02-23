# Calculadora de cuotas (Frontend + Backend)

Proyecto simple con un backend en Node.js/Express que calcula la cuota mensual de un prestamo y un frontend HTML/JS para enviar los datos.

## Requisitos

- Node.js 16+ (o superior)
- Navegador web

## Como ejecutar

### 1) Backend

```bash
cd BackEnd
npm install
node index.js
```

El servidor queda en `http://localhost:3000`.

### 2) Frontend

Abre el archivo [FrontEnd/index.html](FrontEnd/index.html) en tu navegador.

## Uso

- Completa el formulario y presiona "Enviar".
- El frontend envia un POST a `http://localhost:3000/transactions`.
- El backend responde con la cuota mensual calculada.

## Estructura

```
BackEnd/
  index.js
  package.json
  scripts/
    utils.js
FrontEnd/
  index.html
  scripts/
    main.js
```
