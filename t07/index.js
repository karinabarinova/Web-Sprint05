const foo = class {

    #name = "";
    #alias = "";
    #affiliation = "";

    getAnonymous(name, alias, affiliation) {
        this.#name = name;
        this.#alias = alias;
        this.#affiliation = affiliation;
        return this;
    }
    get name() {
        return this.#name;
    }
    get alias() {
        return this.#alias;
    }
    get affiliation() {
        return this.#affiliation
    }
}

function create() {
    const instance = new foo;
    return instance;
}

var i = create();

module.exports = i;

//for test.js

// const i = require('./index');
// const mandarin = i.getAnonymous('Unknown', 'Mandarin', 'Ten Rings');
// console.log([mandarin.name,
//     mandarin.alias,
//     mandarin.affiliation,].
//     join('\n'));

