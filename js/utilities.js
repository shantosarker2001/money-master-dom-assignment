function getInputValuebyId(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value
    const inputValue = parseFloat(inputFieldString)
    inputField.value = '';

    return inputValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText
    const elementValue = parseFloat(elementString)

    return elementValue;
}
function setElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}