const container = document.querySelector("#container");

const divC = document.createElement("div");
divC.style.backgroundColor = "#05B29F";
divC.id = "containerDiv";
divC.style.height = "400px";
divC.style.borderRadius = "15px"
divC.style.width = "300px";
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
    numBtn.style.width = "60px";
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


 const buttonRow4 = document.createElement("div");
 buttonRow4.id = "BottomHalfR3";
buttonRow3.style.height = "40px";
buttonRow3.style.width = "300px";
buttonRow3.classList.add("buttonRow3");
divBottomHalf.appendChild(buttonRow3);

buttonRow3.appendChild(btn0);

 
const PlusBtn = document.createElement("button");
    PlusBtn.id = "plus";
    PlusBtn.style.height = "40px";
    PlusBtn.style.width = "60px";
    PlusBtn.textContent = "+";
 
    PlusBtn.classList.add("PlusBtn");
    container.appendChild(PlusBtn);

//-
const minusBtn = document.createElement("button");
    minusBtn.id = "minus";
    minusBtn.style.height = "40px";
    minusBtn.style.width = "60px";
    minusBtn.textContent = "-";
 
    minusBtn.classList.add("minusBtn");
    container.appendChild(minusBtn);


// divide
const divideBtn = document.createElement("button");
    divideBtn.id = "divide";
    divideBtn.style.height = "40px";
    divideBtn.style.width = "60px";
    divideBtn.textContent = "÷";
 
    divideBtn.classList.add("divideBtn");
    container.appendChild(divideBtn);

//mutliply


const multiplyBtn = document.createElement("button");
    multiplyBtn.id = "multiply";
    multiplyBtn.style.height = "40px";
    multiplyBtn.style.width = "60px";
    multiplyBtn.textContent = "*";
 
    multiplyBtn.classList.add("multiplyBtn");
    container.appendChild(multiplyBtn);

    const equalsBtn = document.createElement("button");
    equalsBtn.id = "equals";
    equalsBtn.style.height = "90px";
    equalsBtn.style.width = "60px";
    equalsBtn.textContent = "=";
 
    equalsBtn.classList.add("equalsBtn");
    container.appendChild(equalsBtn);

    //clear button

    const clearBtn = document.createElement("button");
    clearBtn.id = "clear";
    clearBtn.style.height = "70px";
    clearBtn.style.width = "100px";
    clearBtn.textContent = "Clear";
 
    clearBtn.classList.add("clearBtn");
    container.appendChild(clearBtn);


 clearBtn.addEventListener("click", clearDisplay);

function clearDisplay(event){
    event.preventDefault(); // Prevent default button behavior
    display.textContent = "0"; // Reset to 0 instead of null
    expression = ''; // Also clear the expression if you have one
}
     

    const display = document.createElement("div");
    display.id = "displayDash";
    display.style.height = "78px";
    display.style.width = "250px";
    display.style.borderRadius = "20px";
    display.style.backgroundColor = "#cdb4db"
    display.classList.add("display");
    divBottomHalf.appendChild(display);
    




    function operator(numA, symbol , numB){

        symbol = PlusBtn.textContent ;

        if (symbol== "+"){

            return ( add(numA , numB));
        }
        else if ( symbol=="-"){
            return ( subtract(numA,numB));
        }

        else if ( symbol=="*"){
            return ( multiply(numA,numB));
        }

        else if ( symbol=="÷"){
            return ( divide(numA,numB));
        }

        

    }

 
 
    // display.textContent = btn1.textContent;
const buttons = document.querySelectorAll("button");
 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", doSomething);
}

function doSomething(event) {
    const clickedButton = event.target;
    
    // Add these two lines to skip equals button too
    if (clickedButton.id === 'clear' || clickedButton.id === 'equals') {
        return;
    }
    
    display.textContent += clickedButton.textContent;
    let val = clickedButton.textContent;
}

equalsBtn.addEventListener("click", calculate);

function calculate(event) {
    
    return (display.textContent = operator(Number(lastClickedButtonValue.textContent),PlusBtn.textContent,Number(btn1.textContent)));
}
let buttonsclicked = [];
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const numValue = Number(button.textContent);
        
        if (!isNaN(numValue)) {
            buttonsclicked.push(numValue);
        }
        
        lastClickedButtonValue = event.target.textContent;
        console.log(buttonsclicked);
    });
});

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const value = button.textContent;

          // ✅ Skip clear and equals buttons
        if (button.id === 'clear') {
            return null;
        }
        
        else if (button.id === 'equals') {
            // Evaluate the mathematical expression
            try {
                const result = eval(expression.replace('÷', '/'));
                const roundedNumber = Math.round(result * 100) / 100;
                display.textContent = roundedNumber;
                expression = result.toString(); // Keep result for next operation
            } catch (error) {
                display.textContent = 'Error';
                expression = '';
            }
        } else {
            // Build the expression
            expression += value;
            display.textContent = expression;
        }
    });
});
    
    function add(a , b){

        return a+b;

}
    function subtract(a , b){

        return a-b;
    
}

    function multiply(a,b){

        return a*b;
    
}


    function divide(a,b){
        return a/b;
    
}