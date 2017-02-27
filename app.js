let fs = require('fs');
let LootTable = require('./LootTable.js');
var table = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let chanceMultiplier = process.argv[3] || 1;

console.log("A".charCodeAt(0));

table.npcs.forEach((npc, index) => {
    console.log(index+1 + ': CR ' + npc.CR + ' ' + npc.name);
});

console.log(LootTable);

let app = new LootTable();
app.startPrompt(table, chanceMultiplier);
