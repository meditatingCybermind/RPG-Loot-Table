let fs = require('fs');
let prompt = require('prompt');
var lootTable = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let chanceMultiplier = process.argv[3] || 1;

lootTable.npcs.forEach((npc, index) => {
    console.log(index+1 + ': CR ' + npc.CR + ' ' + npc.name);
});

prompt.start();

getPrompt(lootTable, chanceMultiplier);

function getPrompt(table, multiplier) {
    console.log('Input a pack...')
    prompt.get(['pack'], function (err, result) {
        if (err || result.pack == 'q') { return onErr(err); }
        pack = result.pack.split('');
        pack.forEach((val, index, array) => {
            let rollResult = rollTable(table.npcs[val-1].table, multiplier);
            if(rollResult) {
                console.log(table.npcs[val-1].name + ' has' + rollResult);
            }
        });
        getPrompt(table, multiplier);
    });
}

function rollTable(table, multiplier) {
    let ret = '';
    table.forEach((item, index, array) => {
        let count = 0;
        while(getRandomArbitrary(0, 100) < (item.chance*multiplier > 75 ? 75 : item.chance*multiplier)) {
            count++;
        }
        if (count > 0) {
            ret += ' ' + count + ' ' + item.type + ' of ' + item.name + ',';
        }
    });
    return ret;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function onErr(err) {
    console.log(err);
    return 1;
}
