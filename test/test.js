const assert = require('assert');
const NumberList = require('..');
describe(
    '.stringify()',
    function () {
        describe(
            'return values',
            function () {
                const tests = [
                    [[1], '1'],
                    [[1, 2, 3], '1-3'],
                    [[3, 1, 2], '1-3'],
                    [[], ''],
                    [[10, 6, 7, 6, 10], '6-7, 10'],
                ];
                for (const [arg, expected] of tests) {
                    it(
                        `${JSON.stringify(arg)} should become "${expected}"`,
                        function () {
                            assert.strictEqual(NumberList.stringify(arg), expected);
                        }
                    );
                }
            }
        );
    }
);
describe(
    '.parse()',
    function () {
        describe(
            'return values',
            function () {
                const tests = [
                    ['1', [1]],
                    ['1-3', [1, 2, 3]],
                    ['2-5,7', [2, 3, 4, 5, 7]],
                    [' 4 9\t7,', [4, 7, 9]],
                    ['', []],
                    ['10,10,6-7,6', [6, 7, 10]],
                ];
                for (const [arg, expected] of tests) {
                    it(
                        `"${arg}" should become ${JSON.stringify(expected)}`,
                        function () {
                            assert.deepStrictEqual(NumberList.parse(arg), expected);
                        }
                    );
                }
            }
        );
        describe(
            'errors',
            function () {
                const tests = [
                    ['-1', /Invalid number list/],
                    ['a', /Invalid number list/],
                    ['7-5', /Invalid range/],
                ];
                for (const [arg, regexp] of tests) {
                    it(
                        `"${arg}" should throw ${regexp} error`,
                        function () {
                            assert.throws(
                                function () {
                                    NumberList.parse(arg);
                                },
                                regexp
                            );
                        }
                    );
                }
            }
        );
    }
);
