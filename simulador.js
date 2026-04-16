//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
let ingresos = parseFloat(document.getElementById("txtIngresos").value);
let egresos = parseFloat(document.getElementById("txtEgresos").value);
let disponible = calcularDisponible(ingresos, egresos);
texto("spnDisponible", disponible);
let capasidadDePago = calcularCapacidadDePago(disponible);
texto("spnCapacidadPago", capasidadDePago);

//CALCULAR INTERES SIMPLE

let monto = parseFloat(document.getElementById("txtMonto").value);
let plazo = parseFloat(document.getElementById("txtPlazo").value);
let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value);

let interesSimple = calcularInteresSimple(monto,plazo,tasaInteres);
texto("spnInteresPagar",interesSimple);

//CALCULAR TOTAL PRESTAMO
let valorPagar = calcularTotalPagar(monto,interesSimple);
texto("spnTotalPrestamo",valorPagar)
}