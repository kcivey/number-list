const sortNumber = (a, b) => a - b;
const numberPattern = '[1-9]\\d{0,5}';
const singleNumberRegExp = new RegExp(`^${numberPattern}$`);
const numberListRegExp = new RegExp(`^\\s*(${numberPattern})(?:\\s*-\\s*(${numberPattern}))?(?:,\\s*|\\s+|$)`);

module.exports = {

    parse(s) {
        const numbers = [];
        let m;
        while ((m = s.match(numberListRegExp))) {
            s = s.slice(m[0].length);
            let n = +m[1];
            const end = m[2] == null ? n : +m[2];
            if (n > end) {
                throw new Error(`Invalid range "${n}-${end}"`);
            }
            while (n <= end) {
                if (numbers.indexOf(n) === -1) {
                    numbers.push(n);
                }
                n++;
            }
        }
        if (s) {
            throw new Error(`Invalid number list "${s}"`);
        }
        return numbers.sort(sortNumber);
    },

    stringify(numbers) {
        numbers = numbers.map(function (n) {
            if (!singleNumberRegExp.test(n)) {
                throw new Error(`Invalid number "${n}"`);
            }
            return +n;
        });
        const list = [];
        let currentItem = '';
        let prevN = 0;
        numbers.sort(sortNumber);
        numbers.push(0);
        numbers.forEach(function (n) {
            if (!prevN || !n || n > prevN + 1) {
                if (currentItem) {
                    if (currentItem !== prevN.toString()) {
                        currentItem += '-' + prevN;
                    }
                    list.push(currentItem);
                    currentItem = '';
                }
                if (!currentItem) {
                    currentItem = n.toString();
                }
            }
            prevN = n;
        });
        return list.join(', ');
    },

};
