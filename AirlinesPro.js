const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false }
];

let user = "";
let admin = false;

//nombre usuario + bienvenida
const bienvenida = () => {
  let usuario ="";
  do{
    usuario = prompt("Hola! Introduce tu nombre por favor")
    if (usuario === ""){
      alert(`Bienvenido usuario anónimo ;)`)
      return usuario = "anónimo"
    }
    if(!isNaN(usuario)){
      alert(`Introduce únicamente letras por favor.`)
      usuario = prompt(" Introduce tu nombre por favor")
    }
    if(usuario === null){
      if(confirm("¿Deseas salir?")){
        despedida();
        }else {
          continue
        }
    }
    else{
      alert(`¡Bienvenid@ ${usuario}!`)
      return usuario
    }
  }
  while(usuario !== "" )
}

  const despedida = () => {
    alert(`¡Gracias por su visita ${user}!`)
  }

//visualización vuelos, origen, destino, coste y escala + 5 ultimos vuelos
const panelInformativo = () => {
  let infoVuelo = [];
  let ultimosVuelos = [];

  flights.forEach((element) =>{
    infoVuelo.push(`El vuelo nº: ${element.id} con origen ${element.from} y con destino ${element.to} tiene un coste de ${element.cost} €.`);
    if (element.id > 4){
      ultimosVuelos.push(element.to);
    }
  });
    alert(`Ésta es la tabla de vuelos de hoy ${user}`);
    console.table(infoVuelo);
    console.log(`Los últimos 5 vuelos del día serán con destino: ${ultimosVuelos}`);
}

//coste medio vuelos
const costeMedio = () =>{
    let costeMedio = 0;
    let coste = flights.map(element => element.cost).reduce((a,b) => a +b, 0);
    costeMedio = coste / flights.length;
    console.log(`El Coste medio de los vuelos es de ${costeMedio}€`);
}

//vuelos con escala
const vuelosEscala = () =>{
    let escalas = flights.filter(escala => escala.scale === true)
    console.log(escalas);
    let vuelosEscala = escalas.map(escala => escala.to);
    console.log(`Los vuelos con destino ${vuelosEscala} deberán hacer escala`);
    
}
//check if user is admin
const userIsAdmin = () =>{
  let isAdmin = false;
  let isUser = true;
  
  if(confirm(`¿Quieres acceder como admin?`)){
    isAdmin = true;
    isUser = false
    alert("Accediendo a funciones de administrador...")
    return adminFunct();
  }else {
    despedida();
  }

}

const buscarVuelos = () =>{
  let buscarPrecio = false;
  let resultBusqueda = [];
  
  if(confirm(`¿Quieres hacer una busqueda por precio?`)){
    buscarPrecio = true;
  }else {
    return buscarPrecio = false;
    }
  do{
     const buscar = prompt(`Introduce el precio máximo:`);
      console.log(`Éstos son los vuelos por ${buscar} o menos:`);
    
    flights.forEach(element => {
      if(element.cost <= buscar){
        resultBusqueda.push(element)
      }
    });
    console.table(resultBusqueda);
    if(confirm(`¿Quieres volver a buscar?`)){
      }else {
        buscarPrecio = false;
      }
  }
  while(buscarPrecio === true){
  }
}

const adminFunct = () => {
  let nuevoVuelo ={};
  let updatedFlights = {};
  do{
    if (confirm("¿Quieres añadir u nuevo vuelo?") && flights.length < 16){
      const crearVuelos = (from, to, cost, scale, id ) => {
        id = flights.length
        to = prompt(`Introduce el destino:`)
          if (to === null){
            alert("Debes introducir un destino")
            to = prompt("Nombre del destino:")
          }
        from = prompt(`Introduce el origen:`)
          if (from === null){
            alert("Debes introducir un origen")
            from = prompt("Nombre del origen:")
          }
        cost = Number(prompt(`Introduce el coste:`))
          if (cost === 0){
            alert("Debes introducir un coste, no creo que sea gratis no??")
            cost = Number(prompt("Coste del vuelo:"))
          }
        scale = confirm(`Tiene escalas?`)

        nuevoVuelo ={ id, to, from, cost, scale};
        flights.push(nuevoVuelo);
        console.table(flights);
        return alert(`El vuelo ${nuevoVuelo.id} se añadió correctamente`)
      }
      crearVuelos()
    }
    
    else {
      if (confirm("¿Quieres elimiar un vuelo?")){
        const eliminarVuelos = () =>{
          console.table(flights)
          const idDelete = Number(prompt(`Introduce el ID del vuelo a eliminar: `));
          flights.splice(idDelete, 1)
          console.table(flights)
          return alert(`El vuelo ${idDelete} se ha eliminado`)
        }
        eliminarVuelos()
      }
    };

    if ( flights.length < 15 && confirm(`Continuar editando vuelos? (total vuelos: ${flights.length}/15)`)){
      if(flights.length >= 15){
        alert(`Ya has llegado al limite de 15 vuelos`)
      }
      console.table(flights);
      return adminFunct();
    } else {
      if(confirm("Seguir como admin?")){
        return adminFunct();
      }else{
        if(confirm("acceder como usuario?")){
          return admin = false
            
        }
      }
    }
    }
  
  while(admin === true){

  }
}

const goodbye = ()=>{
  return console.log(`Hasta la próxima ${user}`)
}

const main = () =>{
  user = bienvenida();
  console.log(`Estos son los vuelos de hoy:`, flights);
  admin = userIsAdmin();
  if (admin === false){
    panelInformativo();
    vuelosEscala();
    costeMedio();
    buscarVuelos();
  }
  goodbye();
}

main();