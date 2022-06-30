const http =  require ('http')

const server = http.createServer((peticion,respuesta)=> {

    respuesta.end('hola mundo')


})

const  connectedServer = server.listen (8080, () => {
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address() .port}` )
})