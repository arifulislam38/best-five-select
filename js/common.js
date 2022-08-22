

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

