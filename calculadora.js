

const lcd = document.querySelector("#lcd");

const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const b9 = document.querySelector("#b9");
const bmais = document.querySelector("#bmais");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const bmenos = document.querySelector("#bmenos");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const bvezes = document.querySelector("#bvezes");
const bC = document.querySelector("#bC");
const b0 = document.querySelector("#b0");
const bigual = document.querySelector("#bigual");
const bdividir = document.querySelector("#bdividir");

b0.addEventListener("click", num0);

function num0() {
     lcd.value += 0
}

b1.addEventListener("click", num1);

function num1() {
     lcd.value += 1
}
b2.addEventListener("click", num2);

function num2() {
     lcd.value += 2
}
b3.addEventListener("click", num3);

function num3() {
     lcd.value += 3
}
b4.addEventListener("click", num4);

function num4() {
     lcd.value += 4
}
b5.addEventListener("click", num5);

function num5() {
     lcd.value += 5
}
b6.addEventListener("click", num6);

function num6() {
     lcd.value += 6
}
b7.addEventListener("click", num7);

function num7() {
     lcd.value += 7
}
b8.addEventListener("click", num8);

function num8() {
     lcd.value += 8
}
b9.addEventListener("click", num9);

function num9() {
     lcd.value += 9
}
bC.addEventListener("click", apagar);

function apagar() {
     lcd.value = "";
}
bmais.addEventListener("click", somar);

function somar() {
     lcd.value += "+";
}
bmenos.addEventListener("click", diminuir);

function diminuir() {
     lcd.value += "-";
}
bvezes.addEventListener("click", multiplicar);

function multiplicar() {
     lcd.value += "*";
}
bdividir.addEventListener("click", dividir);

function dividir() {
     lcd.value += "/";
}
bigual.addEventListener("click", function() {
     const protectEval = /^[0-9\s\+\-\*\/\.\(\)]+$/;
     if (lcd.value == "") {
          alert("Digite um valor para calcular");
     } else {
          if (protectEval.test(lcd.value)) {
               lcd.value = eval(lcd.value);
          } else {
               alert("Expressão inválida");
          }
     }
})

