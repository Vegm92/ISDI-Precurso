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
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
let user = "";
let admin = false;

//nombre usuario + bienvenida
const bienvenida = () => {
  let usuario ="";
  //debugger;
  do{
    usuario = prompt("Hola! Introduce tu nombre porfavor")
    if (usuario === ""){
      alert(`Bienvenido usuario anonimo ;)`)
      return usuario = "anonimo"
    }
    if(usuario === null){
      if(confirm("¿Deseas salir?")){
        break
        }else {
          continue
        }
    }
    else{
      alert(`¡Bienvenido ${usuario}!`)
      return usuario
    }
  }
  while(usuario !== "" )
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
    console.log(`Los últimos 5 vuelos del día serán ${ultimosVuelos}`);
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

const userIsAdmin = () =>{
  let isAdmin = false;
  let isUser = true;
  debugger;
  if(confirm(`¿Quieres acceder como admin?`)){
    isAdmin = true;
  } else {
    isUser = false
  }

}
user = bienvenida();
panelInformativo();
vuelosEscala();
costeMedio();
userIsAdmin();
