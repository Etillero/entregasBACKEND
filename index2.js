
const listademascotas = [
    { nombre: "pepi", apellidos: "leal" },
    { nombre: "rex", apellidos: "tillero" },
    { nombre: "Bruce", apellidos: "saenz" },
  ];
  
  function generarNombre({ nombre, apellidos }) {
    return `${nombre} ${apellidos}`;
  }
  
  const nombres = listademascotas.map(generarNombre);
  
  console.log(nombres); 
