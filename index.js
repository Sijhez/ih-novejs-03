// console.log("Hola mundo");
//aplicamos arquitectura estandar:

//IMPORTACIONES
const express = require ("express")
const app = express()//traemos express
require("dotenv").config()//invocamos dotenv

//MIDDLEWARES
app.use(express.static('public'))//buscamos y traemos carpeta public
app.set("views", __dirname + "/views")//buscamos y traemos carpeta views para usar handlebars
app.set("view engine", "hbs")//invocamos view engine para usar hbs

//RUTAS
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/players",(req, res)=>{
  res.render("players")
})
app.get("/teams",(req, res)=>{
    res.render("teams")
  })
  


//SERVIDOR: Recuerda incluir el archivo .env para incluir el puerto
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor activo en puerto ${process.env.PORT}`)
})
