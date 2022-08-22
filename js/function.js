
const listName = document.getElementById('list');

document.getElementById('messi-btn').addEventListener('click', function(){
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('messi-btn');
        const player = getPlayerValueById('player-messi');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
});

document.getElementById('ronaldo-btn').addEventListener('click', function(){
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('ronaldo-btn');
        const player = getPlayerValueById('player-ronaldo');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
});

document.getElementById('neymar-btn').addEventListener('click', function(){
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('neymar-btn');
        const player = getPlayerValueById('player-neymar');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
});

document.getElementById('salah-btn').addEventListener('click', function(){
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('salah-btn');
        const player = getPlayerValueById('player-salah');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
});

document.getElementById('carlos-btn').addEventListener('click', function(){
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('carlos-btn');
        const player = getPlayerValueById('player-carlos');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
});

document.getElementById('suarez-btn').addEventListener('click', function(){
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('suarez-btn');
        const player = getPlayerValueById('player-suarez');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
});


document.getElementById('calculate-btn').addEventListener('click', function(){
    const inputNumber = getInputValueById('per-player-cost');
    const playerNumberString = listName.childElementCount;
    const playerNumber = parseFloat(playerNumberString);
    const prevPlayerCost = document.getElementById('total-p-cost');
    const playerCost = playerNumber * inputNumber;
    prevPlayerCost.innerText = playerCost;
    return prevPlayerCost;
});

document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerCost = getInputValueById('manager-input-field');
    const coachCost = getInputValueById('coach-input-field');
    const totalCost = managerCost + coachCost + prevPlayerCost;
console.log(totalCost);
    const prevCost = document.getElementById('total-cost');
    prevCost.innerText = totalCost;
})







