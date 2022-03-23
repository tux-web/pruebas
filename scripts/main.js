// Inputs HTML
const inputCO = document.querySelector("#insertar-CO");
const inputCA = document.querySelector("#insertar-CA");
const inputHipotenusa = document.querySelector("#insertar-hipotenusa");


// Botones
const btnBorrar = document.querySelector("#borrar");
const btnCalcular = document.querySelector("#calcular");


// Lista HTML
const senLI = document.querySelector("#sen-li");
const cosLI = document.querySelector("#cos-li");
const tanLI = document.querySelector("#tan-li");
const cotLI = document.querySelector("#cot-li");
const secLI = document.querySelector("#sec-li");
const cscLI = document.querySelector("#csc-li");


let medidaCO;
let medidaCA;
let medidaHipotenusa;

// CALCULAR
btnCalcular.addEventListener("click",  function (e) {
    e.preventDefault();
    medidaCO = Number(inputCO.value);
    medidaCA =Number(inputCA.value) ;
    medidaHipotenusa = Number(inputHipotenusa.value);

    calculcarSen(medidaCO, medidaHipotenusa);
    calcularCos(medidaCA, medidaHipotenusa);
    calcularTan(medidaCO, medidaCA);
    calcularCot(medidaCA, medidaCO);
    calcularSec(medidaHipotenusa, medidaCA);
    calculcarcCsc(medidaHipotenusa, medidaCO);

    validar(medidaCO, medidaCA, medidaHipotenusa);
})

 // Encontrar catetos
function encontrarCateto(cateto, hipotenusa) {
    return catetoEntontrado =  Math.sqrt((Math.pow(hipotenusa, 2)) - (Math.pow(cateto, 2)));
}

// Encontrar Hipotenusa
function encontrarHipotenusa(cateto1, cateto2) {
    return hipotenusa = Math.sqrt((Math.pow(cateto1, 2)) + (Math.pow(cateto2, 2)));
}


// Funciones Trigonometricas
function calculcarSen(co, hipotenusa) {
    let sen = co / hipotenusa;
    senLI.textContent = `Sen = ${sen}`;
}

function calcularCos(ca, hipotenusa) {
    let cos = ca / hipotenusa;
    cosLI.textContent = `Cos = ${cos}`;
}

function calcularTan(co, ca) {
    let tan = co / ca;
    tanLI.textContent = `Tan = ${tan}`;
}

function calcularCot(ca, co) {
    let cot = ca / co;
    cotLI.textContent = `Cot = ${cot}`;
}

function calcularSec(hipotenusam, ca) {
    let sec = hipotenusam / ca;
    secLI.textContent = `Sec = ${sec}`;
}

function calculcarcCsc(hipotenusa, co) {
    let csc = hipotenusa / co;
    cscLI.textContent = `Css = ${csc}`;
}

// VALIDACION
function validar(medidaCO, medidaCA, medidaHipotenusa) {
    if(medidaCO & medidaCA & medidaHipotenusa > 0) {
        console.log("todo bien");
    } else {
        console.log(":c");
    }
}