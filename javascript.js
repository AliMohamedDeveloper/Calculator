const container = document.querySelector("#container");

const divC = document.createElement("div");
divC.style.backgroundColor = "#e5e5e5";
divC.id = "containerDiv";
divC.style.height = "500px";
divC.style.width = "400px";
divC.classList.add("divC");
container.appendChild(divC);

const divBottomHalf = document.createElement("div");
 divBottomHalf.id = "BottomHalf";
divBottomHalf.style.height = "300px";
divBottomHalf.style.width = "300px";
divBottomHalf.classList.add("divC");
divC.appendChild(divBottomHalf);

for (let i = 0; i <= 9; i++) {
    const numBtn = document.createElement("button");
    numBtn.id = "number";
    numBtn.style.height = "40px";
    numBtn.style.width = "40px";
    numBtn.textContent = i;
    numBtn.id = `a${i}`;
    numBtn.classList.add("numBtn");
    divBottomHalf.appendChild(numBtn);
}

const buttonRow1 = document.createElement("div");
 buttonRow1.id = "BottomHalfR";
buttonRow1.style.height = "40px";
buttonRow1.style.width = "300px";
buttonRow1.classList.add("buttonRow1");
divBottomHalf.appendChild(buttonRow1);

const btn0 = document.querySelector("#a0");
const btn1 = document.querySelector("#a1");
const btn2 = document.querySelector("#a2");
const btn3 = document.querySelector("#a3");
const btn4 = document.querySelector("#a4");
const btn5 = document.querySelector("#a5");
const btn6 = document.querySelector("#a6");
const btn7 = document.querySelector("#a7");
const btn8 = document.querySelector("#a8");
const btn9 = document.querySelector("#a9");

buttonRow1.appendChild(btn4);
buttonRow1.appendChild(btn5);
buttonRow1.appendChild(btn6);

const buttonRow2 = document.createElement("div");
 buttonRow2.id = "BottomHalfR2";
buttonRow2.style.height = "40px";
buttonRow2.style.width = "300px";
buttonRow2.classList.add("buttonRow2");
divBottomHalf.appendChild(buttonRow2);

buttonRow2.appendChild(btn1);
buttonRow2.appendChild(btn2);
buttonRow2.appendChild(btn3);

const buttonRow3 = document.createElement("div");
 buttonRow3.id = "BottomHalfR3";
buttonRow3.style.height = "40px";
buttonRow3.style.width = "300px";
buttonRow3.classList.add("buttonRow3");
divBottomHalf.appendChild(buttonRow3);

buttonRow3.appendChild(btn0);


function add(){

}


function subtract(){
    
}


function multiply(){
    
}


function divide(){
    
}