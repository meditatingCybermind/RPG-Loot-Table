var assert = require('assert');
let LootTable = require('../LootTable.js');
describe('LootTable', function() {
    let app = new LootTable();
    describe('#numToLongBaseChar', function() {

        it('should return 0 when 0', function() {
            assert.equal(app.numToLongBaseChar(0),0);
        });

        it('should return 9 when 9', function() {
            assert.equal(app.numToLongBaseChar(9),9);
        });

        it('should return A when 10', function() {
            assert.equal(app.numToLongBaseChar(10), 'A');
        });

        it('should return Z when 35', function() {
            assert.equal(app.numToLongBaseChar(35), 'Z');
        });

        it('should return a when 36', function() {
            assert.equal(app.numToLongBaseChar(36), 'a');
        });

        it('should return z when 61', function() {
            assert.equal(app.numToLongBaseChar(61), 'z');
        });
    });

    describe('#longBaseCharToNum', function() {

        it('should return 0 when 0', function() {
            assert.equal(app.longBaseCharToNum(0),0);
        });

        it('should return 9 when 9', function() {
            assert.equal(app.longBaseCharToNum(9),9);
        });

        it('should return 10 when A', function() {
            assert.equal(app.longBaseCharToNum('A'), 10);
        });

        it('should return 35 when Z', function() {
            assert.equal(app.longBaseCharToNum('Z'), 35);
        });

        it('should return 36 when a', function() {
            assert.equal(app.longBaseCharToNum('a'), 36);
        });

        it('should return 61 when z', function() {
            assert.equal(app.longBaseCharToNum('z'), 61);
        });
    });
});
