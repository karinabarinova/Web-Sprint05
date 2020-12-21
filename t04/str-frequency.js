function isAlpha(char) {
    return ((char >= 'a' && char <= 'z') || (char >= 'A') && (char <= 'Z'));
}

class StrFrequency {
    constructor(str = "") {
        this.value = str;
    }
    letterFrequencies() {
        if (!this.value)
            return "";
        var freq = {};
        for (let i = 0; i < this.value.length; i++) {
            if (isAlpha(this.value.charAt(i))) {
                var ch = this.value.charAt(i).toUpperCase();
                if (freq[ch])
                    freq[ch]++;
                else
                    freq[ch] = 1;
            }   
        }
        return freq;
    };
    wordFrequencies() {
        if (!this.value)
            return "";
        var freq = {};
        var arr = this.value.split(/[^\w_]/g);
        for (let i = 0; i < arr.length; i++) {
            var word = arr[i].toUpperCase();
            if (freq[word])
                freq[word]++;
            else if (isNaN(parseFloat(word)) && word !== " ")
                freq[word] = 1;
        }
        return freq;
    };
    reverseString() {
        if (!this.value) {
            return "";
        }
        var arr = this.value.split("");
        arr.reverse();
        return this.value = arr.join("");
    }
}

module.exports = StrFrequency;

// test.js
// const StrFrequency = require('./str-frequency');

// function test(str) {
//     const sf = new StrFrequency(str);
//     console.log(`Letters in ${str}`);
//     for (const[k, v] of Object.entries(sf.letterFrequencies())){
//         console.log(`Letter ${k} is repeated ${v} times`);
//     }
//     console.log(`Words in ${str}`);
//     for (const[k, v] of Object.entries(sf.wordFrequencies())){
//         console.log(`Word ${k} is repeated ${v} times`);
//     }
//     console.log(`Reverse of the string: ${str}`);
//     console.log(`${sf.reverseString()}`);
// }

// test("Face it, Harley-- you and your Puddin' are kaput!");
// console.log('*************');
// test('  Test test 123 45 !0 f   HeLlO wOrLd');
// console.log('*************');
// test('');