//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
document.getElementById("errIngresos").innerText = "";

let ingresos = parseFloat(document.getElementById("txtIngresos").value);
if(isNaN(ingresos)){
   document.getElementById("errIngresos").innerText = "Campo obligatorio";
    return;
}
document.getElementById("errEgresos").innerText = "";
let egresos = parseFloat(document.getElementById("txtEgresos").value);
if(isNaN(egresos)){
   document.getElementById("errEgresos").innerText = "Campo obligatorio";
    return;
}
let disponible = calcularDisponible(ingresos, egresos);
texto("spnDisponible", disponible);
let capasidadDePago = calcularCapacidadDePago(disponible);
texto("spnCapacidadPago", capasidadDePago);

//CALCULAR INTERES SIMPLE
    document.getElementById("errMonto").innerText = "";
let monto = parseFloat(document.getElementById("txtMonto").value);
   if(isNaN(monto)){
   document.getElementById("errMonto").innerText = "Campo obligatorio";
    return;}
    if(monto > 20000){
   document.getElementById("errMonto").innerText = "Realizar Investigacion Nivel 02";
    return;}     
    document.getElementById("errPlazo").innerText = "";
let plazo = parseFloat(document.getElementById("txtPlazo").value);
   if(isNaN(monto)){
   document.getElementById("errPlazo").innerText = "Campo obligatorio";
    return;}
   document.getElementById("errTasaInteres").innerText = "";
let tasaInteres = parseFloat(document.getElementById("txtTasaInteres").value);
if(isNaN(monto)){
   document.getElementById("errTazaInteres").innerText = "Campo obligatorio";
    return;}
let interesSimple = calcularInteresSimple(monto,plazo,tasaInteres);
texto("spnInteresPagar",interesSimple);

//CALCULAR TOTAL PRESTAMO
let valorPagar = calcularTotalPagar(monto,interesSimple);
texto("spnTotalPrestamo",valorPagar)

// CALCULAR CUOTA MENSUAL
let cuota = calcularCuotaMensual(valorPagar,plazo);
texto("spnCuotaMensual",cuota);

//APROBAR CREDITO
let aprobar = aprobarCredito(capasidadDePago,cuota);

if(aprobar == true){
    document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO";
} else {
    document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO";
}
}

function reiniciar(){
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";
    document.getElementById("spnDisponible").innerText = "—";
    document.getElementById("spnCapacidadPago").innerText = "—";
    document.getElementById("spnInteresPagar").innerText = "—";
   document.getElementById("spnTotalPrestamo").innerText = "—";
   document.getElementById("spnCuotaMensual").innerText = "—";
   document.getElementById("spnEstadoCredito").innerText = "ANALIZANDO"
}