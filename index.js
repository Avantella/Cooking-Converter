const userInputForm = document.getElementById("form-input");
userInputForm.addEventListener("submit", userPressedSubmit);
const conversionResultNumber = document.getElementById("conversionResult");

function userPressedSubmit (submitEvent) {
    submitEvent.preventDefault(); 
    const formElement = submitEvent.target; 
    const userInputNumber = formElement.userInputNumber.value; 
    const fromUnit = formElement.fromUnit.value;
    const toUnit = formElement.toUnit.value; 
   
    let resultNumber; 

    if (fromUnit === "cups" && toUnit === "desiliter") {
        resultNumber = userInputNumber * 2.365882365;
    }   else if (fromUnit === "desiliter" && toUnit === "cups") {
        resultNumber = userInputNumber / 2.365882365; 
    }   else if (fromUnit === "" && toUnit === "") {
        alert("Error: Make sure you filled out the form correctly!");
    }  else if (fromUnit === "desiliter" && toUnit === "desiliter") {
        alert("Error: Make sure you filled out the form correctly!");
    } else if (fromUnit === "cups" && toUnit === "cups") {
        alert("Error: Make sure you filled out the form correctly!");
    } 
    
    else {
        resultNumber = userInputNumber;
        console.log("Error: Invalid choices selected");
    }

    displayConversionResult(resultNumber);

}

function displayConversionResult(resultNumber) {
    let conversionResult = resultNumber;
    conversionResultNumber.textContent = conversionResult.toFixed(1);
}


