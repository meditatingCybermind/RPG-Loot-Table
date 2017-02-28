let fs = require('fs');
let LootTable = require('./LootTable.js');
var table = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let chanceMultiplier = process.argv[3] || 1;

let app = new LootTable();

table.npcs.forEach((npc, index) => {
    console.log(app.numToLongBaseChar(index) + ': CR ' + npc.CR + ' ' + npc.name);
});

if(table.npcs.length > 10) {
    console.log("\n IMPORTANT! Letter indexes are CASE SENSITIVE! \n");
}

app.startPrompt(table, chanceMultiplier);
