// Puntaje de la cerveza del 1 al 10 
/* 1 a 5 Birra Malasa 
   6 a 7 Birra Bien
   8 a 9 Birra Buenasa 
   10    Birra Excelente
*/

let nota = parseInt (prompt ("ingresar nota a la birrita"))
if(nota >= 1 && nota <= 10) {
   if(nota <= 5) {
       alert("Birra Malasa ")
   } else if(nota <= 7) {
       alert("Birra Bien")
   } else if(nota <= 9) {
       alert("Birra Buena")
   } else {
       alert("Birra Excelente")
   }
} else {
   alert("No existe algo tan Bueno")
}