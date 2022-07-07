const fs = require('fs');

class Contenedor{
    constructor(fileName){
        this.fileName = fileName;
        this.id = 0;
        this.arrayProductos = []
        this.crearArchivoProductosSync()
        this.arrayProductos = []
    }


    crearArchivoProductosSync(){
        try {
            if(!fs.existsSync(this.fileName)){
                fs.writeFileSync(this.fileName,)
                //console.log('Archivo creado')
            }//else{ console.log('EL archivo ya existe')}
        } catch(error) {
            console.log(error)
        }
    }

    leerArchivoProductos(){
        let archivoLeido = fs.readFileSync(this.fileName, 'utf8')
        if(archivoLeido == undefined) archivoLeido = "{}";
        return archivoLeido;
    }

    getAll(){
        return JSON.parse(this.leerArchivoProductos())
    }

    guardarProducto(objetoProducto){
        this.id++
        this.arrayProductos.push({id: this.id, ... objetoProducto })
        fs.writeFileSync(this.fileName, JSON.stringify(this.arrayProductos, null, 2))
    }
    getById(id){
        let producto = this.getAll().find(prod => prod.id === id)
        if(producto == undefined) producto = 'Producto no encontrado'
        return producto;
    }

    getRandom(){
        let idRandom = Math.floor(Math.random()*(this.getAll().length))+1
        return (this.getById(idRandom))
    }

}


let items = [
        {
          "id": 1,
          "category": "libreria",
          "title": "Lapiz",
          "precio": 120,
        },
        {
          "id": 2,
          "category": "libreria",
          "title": " Cuaderno",
          "precio": 2000,
        },
        {
          "id": 3,
          "category": "libreria",
          "title": "Borrador",
          "precio": 100,
        },
        {
          "id": 4,
          "category": "libreria",
          "title": "Libreta",
          "precio": 900,
        },
        {
          "id": 5,
          "category": "libreria",
          "title": "Lapiceras",
          "precio": 130,
        },     
      
];


const contenedor1 =  new Contenedor('./data/productos.txt')
items.forEach(producto => contenedor1.guardarProducto(producto));


const productHTML = (producto) =>{
    return(`<div>
                <span>${producto.id})<span>
                <span> ${producto.title}<span>
                <span> $${producto.precio}<span>
            </div>`
    )
}
let cadena = ''
contenedor1.getAll().forEach(elem => {
    cadena += productHTML(elem)
})



const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenidos y bienvenidas</h1>')})

app.get('./data/productos.txt', (req, res)=>{
    res.send(cadena)})

app.get('./data/productoRandom.txt',(req, res)=>{
    res.send(productHTML(contenedor1.getRandom()))
} )


const PORT = 8080

const server = app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
})