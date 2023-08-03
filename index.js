const userInputForm = document.getElementById("user-input");
userInputForm.addEventListener("submit", userPressedSubmit);

/**
 * @param {SubmitEvent} submitEvent
 */
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
    } 
    
    else {
        resultNumber = userInputNumber;
        console.log("Error: Invalid choices selected");
    }

    displayConversionResult(resultNumber);

}

const conversionResultNumber = document.getElementById("conversionResult");

function displayConversionResult(resultNumber) {
    let conversionResult = resultNumber;
    conversionResultNumber.textContent = conversionResult.toFixed(1);
}


