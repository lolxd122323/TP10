class CJugadores {
    constructor(nombre, posicion, edad, estatura, peso, nacionalidad) {
      this.nombre = nombre;
      this.posicion = posicion;
      this.edad = edad;
      this.estatura = estatura;
      this.peso = peso;
      this.nacionalidad = nacionalidad;
    }
  }
  
  const jugadores = [
    new Jugador("Fábio1", "G", 43, 1.88, 86, "Brasil"),
    new Jugador("Marlon4", "D", 28, 1.83, 78, "Brasil"),
  ];
  
  function crearTabla(titulos, datos) {
    let tabla = "<table><tr>";
    titulos.forEach(titulo => tabla += `<th>${titulo}</th>`);
    tabla += "</tr>";
  
    datos.forEach(fila => {
      tabla += "<tr>";
      fila.forEach(dato => tabla += `<td>${dato}</td>`);
      tabla += "</tr>";
    });
  
    tabla += "</table>";
    return tabla;
  }

  const tablaJugadores = crearTabla(["Nombre", "Posición", "Edad", "Estatura (m)", "Peso (kg)", "Nacionalidad"], jugadores.map(jugador => [jugador.nombre, jugador.posicion, jugador.edad, jugador.estatura, jugador.peso, jugador.nacionalidad]));
  document.write(tablaJugadores);
  
  const jugadoresArgentinos = jugadores.filter(jugador => jugador.nacionalidad === "Argentina");
  const tablaJugadoresArgentinos = crearTabla(["Nombre", "Posición"], jugadoresArgentinos.map(jugador => [jugador.nombre, jugador.posicion]));
  document.write(tablaJugadoresArgentinos);
  
  const jugadoresPeso75_80 = jugadores.filter(jugador => jugador.peso >= 75 && jugador.peso <= 80);
  const tablaJugadoresPeso75_80 = crearTabla(["Nombre", "Peso (kg)"], jugadoresPeso75_80.map(jugador => [jugador.nombre, jugador.peso]));
  document.write(tablaJugadoresPeso75_80);
  
  const jugadorMasAlto = jugadores.reduce((jugadorAlto, jugadorActual) => jugadorActual.estatura > jugadorAlto.estatura ? jugadorActual : jugadorAlto, jugadores[0]);
  document.write(`El jugador más alto es: ${jugadorMasAlto.nombre}`);