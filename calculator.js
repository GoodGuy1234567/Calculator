const Numb = document.getElementById("Number");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");
const plus = document.getElementById("+");
const minus = document.getElementById("-");
const multiply = document.getElementById("*");
const debite = document.getElementById("/");
const dot = document.getElementById(".");
const Delete = document.getElementById("c");
const submit = document.getElementById("submit")

let firstNumber = "0";
let secondNumber = "0";
let helpingThing;

one.onclick = function(){
    Numb.textContent = Numb.textContent + "1";
};
two.onclick = function(){
    Numb.textContent = Numb.textContent + "2";
};
three.onclick = function(){
    Numb.textContent = Numb.textContent + "3";
};
four.onclick = function(){
    Numb.textContent = Numb.textContent + "4";
};
five.onclick = function(){
    Numb.textContent = Numb.textContent + "5";
};
six.onclick = function(){
    Numb.textContent = Numb.textContent + "6";
};
seven.onclick = function(){
    Numb.textContent = Numb.textContent + "7";
};
eight.onclick = function(){
    Numb.textContent = Numb.textContent + "8";
};
nine.onclick = function(){
    Numb.textContent = Numb.textContent + "9";
};
zero.onclick = function(){
    Numb.textContent = Numb.textContent + "0";
};
dot.onclick = function(){
    Numb.textContent = Numb.textContent + ".";
};
plus.onclick = function(){
    firstNumber = Number(Numb.textContent);
    Numb.textContent = "";
    helpingThing = 1;
};
minus.onclick = function(){
    if(Numb.textContent == ""){
        Numb.textContent = Numb.textContent + "-"
    }else if(Numb.textContent != ""){
        firstNumber = Number(Numb.textContent);
        Numb.textContent = "";
        helpingThing = 2;
    };
};
multiply.onclick = function(){
    firstNumber = Number(Numb.textContent);
    Numb.textContent = "";
    helpingThing = 3;
};
debite.onclick = function(){
    firstNumber = Number(Numb.textContent);
    Numb.textContent = "";
    helpingThing = 4;
};
Delete.onclick = function(){
    firstNumber = "0";
    Numb.textContent = "";
};
submit.onclick = function(){
    secondNumber = Number(Numb.textContent);
    if(helpingThing == 1){
        Numb.textContent = firstNumber + secondNumber;
    }else if(helpingThing == 2){
        Numb.textContent = firstNumber - secondNumber
    }else if(helpingThing == 3){
        Numb.textContent = firstNumber * secondNumber
    }else if(helpingThing == 4){
        Numb.textContent = firstNumber / secondNumber
    };
};