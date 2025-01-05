let display = document.querySelector(".main_text");
let displayOperator = document.querySelector(".operatorDisplay");
let displayResult = document.querySelector(".dispalyResult");
let currentResult = "";
let currentElement = "";


let currentOperator = "";
displayOperator.textContent = currentOperator;

let displayText = "";
display.textContent = displayText;

let mathElements = {
    firstNum: "",
    secondNum: "",
    previusSecondNum: "",
    operator: "",
    previusOperator: "",
    result: ""
}

function operation(firstNum, secondNum, operator) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operator === "+") {
        return firstNum + secondNum;
    }
    else if (operator === "-") {
        return firstNum - secondNum;
    }
    else if (operator === "*") {
        return firstNum * secondNum;
    }
    else if (operator === "%") {
        return firstNum * (secondNum / 100);
    }
    else if (operator === "^") {
        return firstNum ** secondNum;
    }
    else {
        return firstNum / secondNum;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            if (mathElements.operator === "") {
                mathElements.firstNum += button.id;
                console.log(`firstNum = ${mathElements.firstNum}`);
                displayText += button.id;
                display.textContent = displayText;
                currentElement = "firstNum";
            }
            else {
                mathElements.secondNum += button.id;
                console.log(`secondNum = ${mathElements.secondNum}`);
                displayText += button.id;
                display.textContent = displayText;
                currentElement = "secondNum";
            }
        }
        else if (button.classList.contains("operator")) {
            if (mathElements.firstNum && !mathElements.secondNum && currentElement != "operator") {
                mathElements.operator += button.id;
                console.log(`operator = ${mathElements.operator}`);
                currentOperator += button.id;
                displayOperator.textContent = currentOperator;
                displayText = "";
                display.textContent = displayText;
                currentElement = "operator";
            }
            else if (mathElements.operator && mathElements.secondNum && currentElement != "operator") {
                result = operation(mathElements.firstNum, mathElements.secondNum, mathElements.operator);
                mathElements.firstNum = `${result}`;
                mathElements.secondNum = "";
                console.log(result);
                currentResult = result;
                displayResult.textContent = currentResult;
                displayText = "";
                display.textContent = displayText;
                mathElements.operator = button.id;
                currentElement = "operator";
                console.log(`operator = ${mathElements.operator}`);
                currentOperator = button.id;
                displayOperator.textContent = currentOperator;
            }
            else {
                console.log("Add number first")
            }
        }
        else if (button.classList.contains("result")) {
            let result;
            if (mathElements.firstNum && mathElements.secondNum && mathElements.operator) {
                result = operation(mathElements.firstNum, mathElements.secondNum, mathElements.operator);
                mathElements.firstNum = `${result}`;
                mathElements.previusSecondNum = mathElements.secondNum;
                mathElements.secondNum = "";
                mathElements.previusOperator = mathElements.operator
                mathElements.operator = "";
                currentOperator = "";
                displayOperator.textContent = currentOperator;
            }
            else {
                console.log(mathElements.previusSecondNum);
                console.log(mathElements.previusOperator);
                result = operation(mathElements.firstNum, mathElements.previusSecondNum, mathElements.previusOperator);
                mathElements.firstNum = `${result}`;
            }
            currentResult = result;
            displayResult.textContent = currentResult;
            console.log(result);
        }
        else if (button.classList.contains("backspace")) {
            if (currentElement === "operator") {
                currentOperator = currentOperator.slice(0, -1);
                displayOperator.textContent = currentOperator;
                mathElements[currentElement] = mathElements[currentElement].slice(0, -1);
            }
            else {
                console.log(`Current element value = ${mathElements[currentElement]}`);
                mathElements[currentElement] = mathElements[currentElement].slice(0, -1);
                displayText = displayText.slice(0, -1);
                console.log(`Current element updated value = ${mathElements[currentElement]}`);
                display.textContent = displayText;
            }

        }
        else if (button.classList.contains("reset")) {
            mathElements.firstNum = "";
            mathElements.secondNum = "";
            mathElements.operator = "";
            console.clear();
            displayText = "";
            display.textContent = displayText;
            currentOperator = "";
            displayOperator.textContent = currentOperator;
            currentResult = '';
            displayResult.textContent = currentResult;
        }
    })

});


