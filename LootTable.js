let prompt = require('prompt');

class LootTable {

    constructor() {}

    startPrompt(table, multiplier) {
        prompt.start();
        this.getPrompt(table, multiplier);
    }

    getPrompt(table, multiplier) {
        let self = this;
        console.log('Input a pack...')
        let result = prompt.get(['pack'], function (err, result) {
            if (err || result.pack == 'q') { return self.onErr(err); }
            let pack = result.pack.split('');
            pack.forEach((val, index, array) => {
                let rollResult = self.rollTable(table.npcs[val-1].table, multiplier);
                if(rollResult.itemString) {
                    console.log(table.npcs[val-1].name + ' has' + rollResult.itemString + ' totalling to ' + rollResult.totalValue + ' gold.');
                }
            });
            self.getPrompt(table, multiplier);
        });
    }

    rollTable(table, multiplier) {
        let itemString = '';
        let totalValue = 0;
        table.forEach((item, index, array) => {
            let count = 0;
            while(this.getRandomArbitrary(0, 100) < (item.chance*multiplier > 75 ? 75 : item.chance*multiplier)) {
                count++;
                totalValue += item.value;
            }
            if (count > 0) {
                itemString += ' ' + count + ' ' + item.type + ' of ' + item.name + ',';
            }
        });

        return {itemString, totalValue};
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    longBaseCharToNum(index) {
        if (index < 10) {
            return index;
        } else {
            let charCode = index.charCodeAt(0)-55;
            return (charCode > 35 ? charCode - 6 : charCode);
        }
    }

    numToLongBaseChar(index) {
        if (index < 10) {
            return index;
        } else {
            let character = String.fromCharCode(index+55);
            return (index < 36 ? String.fromCharCode(index+55) : String.fromCharCode(index+61));
            return String.fromCharCode(index+55);
        }
    }

    onErr(err) {
        console.log(err);
        return 1;
    }
}

module.exports = LootTable;
