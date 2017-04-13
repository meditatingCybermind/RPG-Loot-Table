var assert = require('assert');
let LootTable = require('../LootTable.js');
describe('LootTable', () => {
    let app = new LootTable();
    describe('#numToLongBaseChar', () => {

        it('should return 0 when 0', () => {
            assert.equal(app.numToLongBaseChar(0),0);
        });

        it('should return 9 when 9', () => {
            assert.equal(app.numToLongBaseChar(9),9);
        });

        it('should return A when 10', () => {
            assert.equal(app.numToLongBaseChar(10), 'A');
        });

        it('should return Z when 35', () => {
            assert.equal(app.numToLongBaseChar(35), 'Z');
        });

        it('should return a when 36', () => {
            assert.equal(app.numToLongBaseChar(36), 'a');
        });

        it('should return z when 61', () => {
            assert.equal(app.numToLongBaseChar(61), 'z');
        });
    });

    describe('#longBaseCharToNum', () => {

        it('should return 0 when 0', () => {
            assert.equal(app.longBaseCharToNum(0),0);
        });

        it('should return 9 when 9', () => {
            assert.equal(app.longBaseCharToNum(9),9);
        });

        it('should return 10 when A', () => {
            assert.equal(app.longBaseCharToNum('A'), 10);
        });

        it('should return 35 when Z', () => {
            assert.equal(app.longBaseCharToNum('Z'), 35);
        });

        it('should return 36 when a', () => {
            assert.equal(app.longBaseCharToNum('a'), 36);
        });

        it('should return 61 when z', () => {
            assert.equal(app.longBaseCharToNum('z'), 61);
        });
    });

    describe('#createItemString', () => {

        let item = {
            type: 'Sword',
            name: 'Coolness'
        };

        it('should create a proper item string', () => {
            assert.equal(app.createItemString(1, item), ' 1 Sword of Coolness,')
        });

        it('should pluralize the type when count > 1', () => {
            assert.equal(app.createItemString(2, item), ' 2 Swords of Coolness,')
        });
    });
});
