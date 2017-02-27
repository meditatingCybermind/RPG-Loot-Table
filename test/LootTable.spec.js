var assert = require('assert');
let LootTable = require('../LootTable');
describe('LootTable', function() {
    let app = new LootTable();
  describe('#longBaseIndex', function() {
    it('should return 0 when 0', function() {
      assert.equal(0, LootTable.longBaseIndex(0));
    });
    it('should return 10 when A', function() {
      assert.equal(10, LootTable.longBaseIndex('A'));
    });
    it('should return 9 when 9', function() {
      assert.equal(9, LootTable.longBaseIndex(9));
    });
    it('should return 11 when a', function() {
      assert.equal(11, LootTable.longBaseIndex('a'));
    });
  });
});
