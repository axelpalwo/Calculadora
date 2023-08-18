/* Extraemos los botones de la calculadora y las almacenamos en variables*/
const display = document.getElementById("display")
const reset = document.getElementById("reset")
const division = document.getElementById("division")
const multiplicacion = document.getElementById("multiplicacion")
const num7 = document.getElementById("7")
const num8 = document.getElementById("8")
const num9 = document.getElementById("9")
const num4 = document.getElementById("4")
const num5 = document.getElementById("5")
const num6 = document.getElementById("6")
const num1 = document.getElementById("1")
const num2 = document.getElementById("2")
const num3 = document.getElementById("3")
const num0 = document.getElementById("0")
const dot = document.getElementById(".")
const resta = document.getElementById("resta")
const suma = document.getElementById("suma")
const igual = document.getElementById("igual")
/*Declaramos variables para realizar las cuentas*/
let cuenta = 0;
let valor1 = 0;
let valor2 = 0;
let resultado = 0;
let segundacuenta = false;
/*Botón AC - Reset Display*/
function resetear(){
    display.innerHTML = "0";
    cuenta = 0;
    valor1 = 0;
    valor2 = 0;
}
/*Función para apretar los números y aparezcan en pantalla*/
function mostrarnumero(num){
    if (display.innerHTML === "0"){
        display.innerHTML = num.textContent;
    } else if (segundacuenta === true){
        display.innerHTML = num.textContent;
        segundacuenta = false;
    } else {
    display.innerHTML += num.textContent;
    }
/*Funciones para cambiar el modo de la cuenta*/
}
function adicion(){
    cuenta = 1;
    valor1 = display.innerHTML;
    segundacuenta = true;
}
function sustraccion(){
    cuenta = 2;
    valor1 = display.innerHTML;
    segundacuenta = true;
}
function multiplicar(){
    cuenta = 3;
    valor1 = display.innerHTML;
    segundacuenta = true;
}
function dividir(){
    cuenta = 4;
    valor1 = display.innerHTML;
    segundacuenta = true;
}
/*Ejecutor de cuentas - Botón de igual*/
function resultadocuenta() {
    valor2 = display.innerHTML;

    if (cuenta == 1) {
        resultado = Number(valor1) + Number(valor2);
    } else if (cuenta == 2) {
        resultado = Number(valor1) - Number(valor2);
    } else if (cuenta == 3) {
        resultado = Number(valor1) * Number(valor2);
    } else if (cuenta == 4) {
        resultado = Number(valor1) / Number(valor2);
    } else {
        display.innerHTML = valor2;
        return;
    }

    if (resultado.toString().length > 8) {
        if (Math.abs(resultado) > 9999999) {
            display.innerHTML = "Cap. excedida";
        } else {
            display.innerHTML = resultado.toFixed(8);
        }
    } else {
        display.innerHTML = resultado;
    }

    segundacuenta = true;
}
/*Event Listeners en los botones para que puedan accionarse*/
document.addEventListener("DOMContentLoaded",function(e){
    reset.addEventListener("click",resetear)
    division.addEventListener("click",function(){dividir()})
    multiplicacion.addEventListener("click",function(){multiplicar()})
    resta.addEventListener("click",function(){sustraccion()})
    suma.addEventListener("click",function(){adicion()})
    dot.addEventListener("click",function() {mostrarnumero(dot)})
    igual.addEventListener("click",function(){resultadocuenta()})
    num7.addEventListener("click",function() {mostrarnumero(num7)})
    num8.addEventListener("click",function() {mostrarnumero(num8)})
    num9.addEventListener("click",function() {mostrarnumero(num9)})
    num4.addEventListener("click",function() {mostrarnumero(num4)})
    num5.addEventListener("click",function() {mostrarnumero(num5)})
    num6.addEventListener("click",function() {mostrarnumero(num6)})
    num1.addEventListener("click",function() {mostrarnumero(num1)})
    num2.addEventListener("click",function() {mostrarnumero(num2)})
    num3.addEventListener("click",function() {mostrarnumero(num3)})
    num0.addEventListener("click",function() {mostrarnumero(num0)})
})
