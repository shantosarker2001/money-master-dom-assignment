function getInputValuebyId(inputId) {
    const inputField = document.getElementById(inputId);
    let inputFieldString = inputField.value
    inputField.value = '';
    const inputValue = parseInt(inputFieldString)

    return inputValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText
    element.innerText = ""
    const elementValue = parseInt(elementString)
    return elementValue;
}
function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = parseInt(newValue);
}