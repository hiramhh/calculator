let numeroA;
let numeroB;
let operacion;


const uno = document.getElementById("uno").addEventListener("click", pruebaUno);
const dos = document.getElementById("dos").addEventListener("click", pruebaDos);
const tres = document.getElementById("tres").addEventListener("click", pruebaTres);
const cuatro = document.getElementById("cuatro").addEventListener("click", pruebaCuatro);
const cinco = document.getElementById("cinco").addEventListener("click", pruebaCinco);
const seis = document.getElementById("seis").addEventListener("click", pruebaSeis);
const siete = document.getElementById("siete").addEventListener("click", pruebaSiete);;
const ocho = document.getElementById("ocho").addEventListener("click", pruebaOcho);
const nueve = document.getElementById("nueve").addEventListener("click", pruebaNueve);
const cero = document.getElementById("cero").addEventListener("click", pruebaCero);
const punto = document.getElementById("punto").addEventListener("click", pruebaPunto)
const display = document.getElementById("valor-actual");
const display2 = document.getElementById("valor-anterior");


function pruebaUno(){
    display.innerText = display.innerText + "1";
}

function pruebaDos(){
    display.innerText = display.innerText + "2";
}

function pruebaTres(){
    display.innerText = display.innerText + "3";
}

function pruebaCuatro(){
    display.innerText = display.innerText + "4";
}

function pruebaCinco(){
    display.innerText = display.innerText + "5";
}

function pruebaSeis(){
    display.innerText = display.innerText + "6";
}

function pruebaSiete(){
    display.innerText = display.innerText + "7";
}

function pruebaOcho(){
    display.innerText = display.innerText + "8";
}

function pruebaNueve(){
    display.innerText = display.innerText + "9";
}

function pruebaCero(){
    display.innerText = display.innerText + "0";
}

function pruebaPunto(){
    display.innerText = display.innerText + "."
}


function suma(){
    numeroA = display.outerText;
    display2.innerText = display.innerText + " + "
    display.innerText = "";
    operacion = "+"

}

function resta(){
    numeroA = display.outerText;
    display2.innerText = display.innerText + " - "
    display.innerText = "";
    operacion = "-"
}

function multiplicacion(){
    numeroA = display.outerText;
    display2.innerText = display.innerText + " * "
    display.innerText = "";
    operacion = "*"
}

function division(){
    numeroA = display.outerText;
    display2.innerText = display.innerText + " / "
    display.innerText = "";
    operacion = "/"
}


function igual(){

    switch(operacion){
        case "+":
            numeroB = display.outerText;
            display2.innerText = `${display2.innerText} ${display.innerText}`;
            display.innerText = parseFloat(numeroA) + parseFloat(numeroB);

            break;
        case "-":
            numeroB = display.outerText;
            display2.innerText = `${display2.innerText} ${display.innerText}`
            display.innerText = parseFloat(numeroA) - parseFloat(numeroB);
        break;
        case "*":
            numeroB = display.outerText;
            display2.innerText = `${display2.innerText} ${display.innerText}`;
            display.innerText = parseFloat(numeroA) * parseFloat(numeroB);
        break;
        case "/":
            numeroB = display.outerText;
            display2.innerText = `${display2.innerText} ${display.innerText}`;
            display.innerText = parseFloat(numeroA) / parseFloat(numeroB);
        break;
        default:
            console.log("Error");
        break;
        }
}

function borrarTodo(){
    numeroA = "";
    numeroB = "";
    operacion = "";
    display2.innerText = "";
    display.innerText = "";
}


function borrarDigito(){
    const digito = display.innerText;
    display.innerText = digito.slice(0, digito.length-1);

}