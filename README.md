##DOCUMENTACION BASICA
# Desarrollo de proyecto


## Creación de `package.json`

```shell
$ npm init --yes
```

## Establecimiento de scripts en `package.json`

```json
...
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
...

```
## Instalación de librerías

- express
- dotenv
- hbs

```shell
$ npm install express
$ npm install dotenv
$ npm install hbs
```


## Desarrollo de aplicación

- Las importaciones son el código externo e interno del proyecto.

- Recordar activar tus variables de entorno.

- Cuando levantes el servidor, recuerda utilizar `process.env.PORT` para vincularlo con el archivo `.env`

- Crea el archivo `.env` y pasa tu propiedad PORT.


## Construcción del archivo `index.js`

- Aplicamos arquitectura estándar:

```javascript
// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()

require("dotenv").config()


// 2. MIDDLEWARES
app.get("/", (req, res) => {

	res.render("index")

})

// 3. RUTAS
app.get("/", (req, res) => {

	res.render("index")

})

// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})
```

`.env`
```
PORT=3005
```
