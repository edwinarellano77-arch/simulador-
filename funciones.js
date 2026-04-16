//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos){

    let disponible = ingresos - egresos;
        if(disponible < 0){
       disponible = 0;
}
       return disponible;
}



function calcularCapacidadDePago(montoDisponible){
let capasidadDePago = montoDisponible / 2;

return capasidadDePago;
}



function texto (id,vari){
let texto1 = document.getElementById(id);
texto1.innerText=vari.toFixed(2);

}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes = monto * (tasa/100) * plazoAnios;
    return interes;
}

function calcularTotalPagar(monto,interes){
let valorPagar= monto + interes + 100;
return valorPagar;
}

function calcularCuotaMensual(total,plazoAnios){
let cuotaMensual = total/(plazoAnios*12);
return cuotaMensual;
}