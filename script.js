//var display = document.querySelector(".numbers");
var display = document.getElementById("numbers");

function mouseClick(num){ //Indicate that the button is begin clicked
    const element = document.getElementById("calculator");
    element.getElementsByTagName("td")[num].style.backgroundColor = "rgb(167, 167, 167)";  

    delay(500).then(() => element.getElementsByTagName("td")[num].style.backgroundColor = "rgb(255, 255, 255)");  

}

function delay(time) { //Function to delay n miliseconds
    return new Promise(resolve => setTimeout(resolve, time));
}

function putNumbers(num){ //Put numbers on display
   if (display.textContent === "0"){
        display.textContent = num;
   } else {
       display.textContent = display.textContent + num;
   }
}

function decimalNumber(){ //Put a , on display (only one can exist)
    if (!display.textContent.includes(",")){
        display.textContent = display.textContent + ",";
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

function fullDelete(){ //Reset display
    display.textContent = "0";
}

