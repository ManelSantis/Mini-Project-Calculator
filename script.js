let display = document.getElementById("numbers");
let displayOperators = document.getElementById("operators");
let nums = [];
let opera = [];

function mouseClick(num) { //Indicate that the button is begin clicked
    const element = document.getElementById("calculator");
    element.getElementsByTagName("td")[num].style.backgroundColor = "rgb(167, 167, 167)";  

    delay(500).then(() => element.getElementsByTagName("td")[num].style.backgroundColor = "rgb(255, 255, 255)");  
}

function delay(time) { //Function to delay n miliseconds
    return new Promise(resolve => setTimeout(resolve, time));
}

function putNumbers(num) { //Put numbers on display
   if (display.textContent === "0"){
        display.textContent = num;
   } else {
       display.textContent = display.textContent + num;
   }
}

function decimalNumber() {//Put a , on display (only one can exist)
    if (!display.textContent.includes(".")){
        display.textContent = display.textContent + ".";
    }
}

function addition() { //Add + on the operators
    if (display.textContent === "0"){
        displayOperators.textContent = displayOperators.textContent.slice(0, -1) + "+"; //Change last operator
    } else {
        displayOperators.textContent = displayOperators.textContent + display.textContent + "+";
        display.textContent = "0";
    }
}

function subtration() { //Add - on the operators
    if (display.textContent === "0"){
        displayOperators.textContent = displayOperators.textContent.slice(0, -1) + "-"; //Change last operator
    } else {
        displayOperators.textContent = displayOperators.textContent + display.textContent + "-";
        display.textContent = "0";
    }
}

function multiplication() { //Add * on the operators
    if (display.textContent === "0"){
        displayOperators.textContent = displayOperators.textContent.slice(0, -1) + "*"; //Change last operator
    } else {
        displayOperators.textContent = displayOperators.textContent + display.textContent + "*";
        display.textContent = "0";
    }
}

function division() { //Add / on the operators
    if (display.textContent === "0"){
        displayOperators.textContent = displayOperators.textContent.slice(0, -1) + "/"; //Change last operator
    } else {
        displayOperators.textContent = displayOperators.textContent + display.textContent + "/";
        display.textContent = "0";
    }
}

function root() {
    
}

function equals() { //Result on display
    displayOperators.textContent = displayOperators.textContent + display.textContent;
    compiler(displayOperators.textContent);
    displayOperators.textContent = "";
    let result = 0;
    let j = 0;

    if ((opera.includes("*")) || (opera.includes("/"))) {
        for (let i = 0; i < (nums.length - 1); i++){
            if ((opera[j] === "*") || (opera[j] === "/")) {
                result = calc(nums[i], nums[i+1], opera[j]);
                nums[i] = result;
                nums[i + 1] = result;
            }
            j++;
        }
        j = 0;
        for (let i = 0; i < (nums.length - 1); i++){
            if ((opera[j] === "+") || (opera[j] === "-")) {
                result = calc(nums[i], nums[i+1], opera[j]);
                nums[i+1] = result;
            }
            j++;
        }
    } else {
        for (let i = 0; i < (nums.length - 1); i++){
            result = calc(nums[i], nums[i+1], opera[j]);
            nums[i+1] = result;
            j++;
        }
    }
    

    display.textContent = result;
    nums = [];
    opera = [];
}

function compiler(value) { //Make arrays for Operators and Numbers
    value = value.split("");

    let aux = "";
    value.map( character => {
    if ((!isNaN(character)) || (character === ".")){
            aux = aux + character;        
        } else {
            nums.push(aux);
            aux = "";
            opera.push(character);
        }
    })  
    nums.push(aux);
}

function calc(num1, num2, operator) { //Arithmetic

    if(operator === "+") {
        return (parseFloat(num1) + parseFloat(num2));
    }

    if(operator === "-") {
        return (parseFloat(num1) - parseFloat(num2));
    }

    if(operator === "*") {
        return (parseFloat(num1) * parseFloat(num2));
    }

    if(operator === "/") {
        return (parseFloat(num1) / parseFloat(num2));
    }
    
}

function deleteNumber() { //Delete something from display
    const editText =  display.textContent.slice(0, -1);
    if (display.textContent.length == 1){
        display.textContent = "0";
    } else {
        display.textContent = editText;
    }
}

function fullDelete() { //Reset display
    nums = [];
    opera = [];
    display.textContent = "0";
}



