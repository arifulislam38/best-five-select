

document.getElementById('messi-btn').addEventListener('click', function(){
    const listName = document.getElementById('list');
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
    const listName = document.getElementById('list');
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
    const listName = document.getElementById('list');
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
    const listName = document.getElementById('list');
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
    const listName = document.getElementById('list');
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
    const listName = document.getElementById('list');
    if(listName.childElementCount < '5'){
        const btnValue = getButtonActionById('suarez-btn');
        const player = getPlayerValueById('player-suarez');
        addUlList('list', player);
    }
    else{
        alert('Maximum limit exceed');
    }
    
});









