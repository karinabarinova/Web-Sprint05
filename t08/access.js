class Access {
    constructor(){}
    set mark_LXXXV(mark) {
        this._mark_LXXXV = mark;
    }
    get mark_LXXXV() {
        if (this._mark_LXXXV === 'undefined')
            return 'undefined';
        if (this._mark_LXXXV === 'null')
            return 'null';
        return this._mark_LXXXV;
    }
}

module.exports = Access;

//for test.js
// const Access = require('./access');
// const o = new Access;
// console.log(o.mark_LXXXV);
// o.mark_LXXXV= 'null';
// console.log(o.mark_LXXXV);
// o.mark_LXXXV= 'INACTIVE';
// console.log(o.mark_LXXXV);