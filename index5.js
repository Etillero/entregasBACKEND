const express = require('express')
const { Server } = require('http')

const app = express()


app.get('/', (req, res) => {
    res.send(`<h1 style="color:yellow;"> Bienvenidos al servidor de frutas</h1>`)
  })

  let visitas = 0
  app.get('/visitas', (req, res) => {
    res.send(`la cantidad de frutas vistas en el server es ${++visitas}`)
  })

  app.get('/', (req, res) => {
    res.send("Uva")
  })

  app.get('/', (req, res) => {
    res.send("papaya")
  })
  app.get('/', (req, res) => {
    res.send("manzana")
  })

  app.get('/', (req, res) => {
    res.send("mango")
  })
  

const PORT = 8080
const  connectedServer = app.listen(PORT, () => {

 console.log(`Servidor Http escuchando en el puerto ${connectedServer.address() .port}`)

} )

Server.on ("error", error => console.log(`error en servidor ${error}`))