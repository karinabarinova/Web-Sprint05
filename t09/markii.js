class MarkII {
    constructor() {}
    print() {
        for (let prop in this)
            console.log(this[prop]);
    }
}
module.exports = MarkII;

//for test.js
// const MarkII = require('./markii');
// const Printable = require('./printable');

// class WarMachine extends MarkII{}
// Object.assign(WarMachine.prototype, Printable);
// const wm = new WarMachine;
// wm.print();