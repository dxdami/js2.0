// Nombre de la persona
let nombre = prompt("escribe tu nombre");

// Calculamos el momento del dia
let fecha = new Date();
let hora = fecha.getHours();
let buenas;

if (hora >= 0 && hora < 12) {
  buenas = "Buenos días";
} else if (hora >= 12 && hora < 19) {
  buenas = "Buenas tardes";
} else if (hora >= 19 && hora < 24) {
  buenas = "Buenas noches";
}
alert(buenas + " " + nombre);

// Hagamoslo incluyente
let genero = prompt(
  "Favor indicar como prefiere que me dirija a ud \n ( M-masculino, F-femenino y N-no definido ) "
);

if (genero == "F" || genero == "f") {
  genero = "a";
} else if (genero == "M" || genero == "m") {
  genero = "o";
} else {
  genero = "e";
}

// Comprobamos el password
let pass;
let x = 0;
do {
  if (x === 3) {
    bye("Strike: 3, OUT!!!");
    break;
  } else {
    if (x > 0) {
      alert("Strike: " + x);
    }
    x++;
  }
  pass = prompt("escribe tu contraseña es un 123");

} while (pass !== "123");

if (pass === "123") {
  alert("Hola " + nombre + ", " + "bienvenido" + genero + " a Domuyo credit ");
  // Comienza el catalogo
  inicioCuestionario();
} else {
  alert("Nos vemos pronto");
}

function inicioCuestionario() {
  let respCategorias = parseInt(
    prompt("Categorias: \n 1: Pedi tu linea de credito \n Para salir cualquier otra cosa")
  );
  categorias(respCategorias);
}

// este se encargara de resolver las categorias
function categorias(respuesta) {
  let respProducto;
  if (respuesta === 1) {
    respProducto = respuesta + "." + parseInt(prompt("Escoge tu linea de credito: \n 1: Sistema frances \n 2: Tasa fija \n 3: tasa variable  \n Para salir cualquier otra cosa"));
    detalleProducto(parseFloat(respProducto));
  } 
}
// este se encargara de resolver los productos
function detalleProducto(respuesta) {
  if (respuesta === 1.1) {
    Articulo = "Sistema Frances";
    Modelo = "Financia hasta en 48  ";
    Precio = 165;
    iva = Precio * 0.21;
    inventario = 000;
  } else if (respuesta === 1.2) {
    Articulo = "Tasa Fija";
    Modelo = "consulta la tasa";
    Precio = 21.35;
    iva = Precio * 0.16;
    inventario = 15;
  } else if (respuesta === 1.3) {
    Articulo = "Tasa Variable";
    Modelo = "sujeto a Uva";
    Precio = 785.79;
    iva = Precio * 0.16;
    inventario = 3;
  } 

  fichaTecnica(Articulo, Modelo, Precio, iva, inventario);
}

function fichaTecnica(art, mod, costo, iva, existencias) {
  alert(" Articulo:   " + art +
    "\n Modelo:     " + mod +
    "\n Precio:     $" + costo + " ( + $" + iva + " de I.V.A ) " +
    "\n Inventario: " + existencias + " piezas"
  );

  respuesta = prompt("Quieres ver otro articulo? \n S=Sí N=No");
  if (
    respuesta === "si" ||
    respuesta === "Si" ||
    respuesta === "sí" ||
    respuesta === "Sí" ||
    respuesta === "s" ||
    respuesta === "S"
  ) {
    inicioCuestionario();
  } else {
    bye("Bye " + nombre + ", hasta pronto!");
  }
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function bye(mensaje) {
  alert(mensaje);
}