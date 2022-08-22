

function getButtonActionById(btnId){
    const button = document.getElementById(btnId);
    button.setAttribute('disabled', '');
    button.style.backgroundColor = "#95a5a6";
}
function getPlayerValueById(playerId){
    const playerName = document.getElementById(playerId);
    return playerName.innerText;
}
function addUlList(elementId, idValue){
    const element = document.getElementById(elementId);
    const li = document.createElement('li');
    li.innerText = idValue;
    element.appendChild(li);
}

function stringTonumber(stringId){
    const string = document.getElementById(stringId);
    const stringValue = string.innerText;
    const number = parseFloat(stringValue);
    return number;
}

function getInputValueById(inputId){
    const inputElement = document.getElementById(inputId);
    const inputString = inputElement.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}
