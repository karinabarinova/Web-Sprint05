class HardWorker {
    constructor(name = "", Age = 1, Salary = 1) {
        this.name = name;
        this._age = Age;
        this._salary = Salary;
    }
    toObject(){
        const obj = {};
        obj.name = this.name;
        obj.age = this._age;
        obj.salary = this._salary;
        return obj;
    }
    set age(_Age) {
        if (_Age >= 1 && _Age <= 100)
            this._age = _Age;
    }
    set salary(_salary) {
        if (_salary >= 100 && _salary < 10000)
            this._salary = _salary;
    }
}

module.exports = HardWorker;

// test.js
// const HardWorker = require('./hard-worker');
// bruce = new HardWorker;
// bruce.name = 'Bruce';
// console.log(bruce.name);
// bruce.age = 50;
// bruce.salary = 1500;
// console.log(bruce.toObject());
// bruce.name = 'Linda';
// bruce.age = 140;
// console.log(bruce.toObject());