let currentElement = "";

let mathElements = {
    firstNum: "",
    secondNum: "",
    operator: "",
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
                currentElement = "firstNum";
            }
            else {
                mathElements.secondNum += button.id;
                console.log(`secondNum = ${mathElements.secondNum}`);
                currentElement = "secondNum";
            }
        }
        else if (button.classList.contains("operator")) {
            if (mathElements.firstNum && !mathElements.secondNum) {
                mathElements.operator += button.id;
                console.log(`operator = ${mathElements.operator}`);
                currentElement = "operator";
            }
            else if (mathElements.operator && mathElements.secondNum) {
                result = operation(mathElements.firstNum, mathElements.secondNum, mathElements.operator);
                mathElements.firstNum = `${result}`;
                mathElements.secondNum = "";
                console.log(result);
                mathElements.operator = button.id;
                currentElement = "operator";
                console.log(`operator = ${mathElements.operator}`);
            }
            else {
                console.log("Add first number first")
            }
        }
        else if (button.classList.contains("result")) {
            result = operation(mathElements.firstNum, mathElements.secondNum, mathElements.operator);
            mathElements.firstNum = `${result}`;
            mathElements.secondNum = "";
            mathElements.operator = ""
            console.log(result);
        }
        else if (button.classList.contains("backspace")) {
            console.log(`Current element value = ${mathElements[currentElement]}`);
            mathElements[currentElement] = mathElements[currentElement].slice(0, -1);
            console.log(`Current element updated value = ${mathElements[currentElement]}`);
        }
        else if (button.classList.contains("reset")) {
            mathElements.firstNum = "";
            mathElements.secondNum = "";
            mathElements.operator = "";
            console.clear();
        }
    })

});
