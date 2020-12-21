exports.checkDivision = (start = 1, end = 60) => {
    var str = "";
    for (; start <= end; start++) {
        str = `The number ${start}`;
        if (start % 2 === 0)
            str += " is divisible by 2";
        if (start % 3 === 0) {
            if (str.length > 13)
                str += ",";
            str += " is divisible by 3";
        }
        if (start % 10 === 0) {
            if (str.length > 13)
                str += ",";
            str += " is divisible by 10";
        }
        if (str.length <= 15)
            str += " -";
        console.log(str);
    }
};

//Code for test.js testing
// const i = require('./index');
// console.log('*** Range is 3 - 7 checkDivision(3, 7) ***');
// i.checkDivision(3, 7);
// console.log('\n*** Range is 58 - ... checkDivision(58) ***');
// i.checkDivision(58);
// console.log('\n*** Range is ... - ... checkDivision() ***');
// i.checkDivision();