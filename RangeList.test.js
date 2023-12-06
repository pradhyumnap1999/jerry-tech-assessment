const RangeList = require('./RangeList');
const assert = require('assert');

describe('RangeList', function() {
    let rl;

    beforeEach(function() {
        rl = new RangeList();
    });

    describe('#add()', function() {
        it('should add ranges correctly', function() {
            rl.add([1, 5]);
            assert.strictEqual(rl.toString(), '[1, 5)');

            rl.add([10, 20]);
            assert.strictEqual(rl.toString(), '[1, 5) [10, 20)');

            rl.add([20, 20]);
            assert.strictEqual(rl.toString(), '[1, 5) [10, 20)');

            rl.add([20, 21]);
            assert.strictEqual(rl.toString(), '[1, 5) [10, 21)');

            rl.add([2, 4]);
            assert.strictEqual(rl.toString(), '[1, 5) [10, 21)');

            rl.add([3, 8]);
            assert.strictEqual(rl.toString(), '[1, 8) [10, 21)');
        });
    });

    describe('#remove()', function() {
        it('should remove ranges correctly', function() {
            rl.add([1, 5]);
            rl.add([10, 20]);

            rl.remove([10, 10]);
            assert.strictEqual(rl.toString(), '[1, 5) [10, 20)');

            rl.remove([10, 11]);
            assert.strictEqual(rl.toString(), '[1, 5) [11, 20)');

            rl.remove([15, 17]);
            assert.strictEqual(rl.toString(), '[1, 5) [11, 15) [17, 20)');

            rl.add([20, 21]);
            rl.remove([3, 19]);
            assert.strictEqual(rl.toString(), '[1, 3) [19, 21)');
        });
    });
});

