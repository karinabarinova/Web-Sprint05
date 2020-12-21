function isAlpha(char) {
    return ((char >= 'a' && char <= 'z') || (char >= 'A') && (char <= 'Z'));
}
function replaceAt(str, index, newChar) {
    return str.replace(/./g, (c, i) => i == index ? newChar : c);
}

exports.firstUpper = (str) => {
    if (!str) {
        return "";
    }
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if  (i === 0 && isAlpha(str[i]))
            if (str.charAt(i) != str.charAt(i).toUpperCase)
                str = replaceAt(str, i, str.charAt(i).toUpperCase());
    }
    return str;
};

// Test.js 
// const i = require('./index');
// console.log(`"testing String": ${i.firstUpper("testing String")}`);
// console.log(`"   testing   String": ${i.firstUpper("   testing   String")}`);
// console.log(`"07": ${i.firstUpper("07")}`);
// console.log(`"": ${i.firstUpper("")}`);
// console.log(`null: ${i.firstUpper(null)}`);
// console.log(i.firstUpper('   ...I Will Rebuild Krypton Atop His Bones.'));
// console.log(i.firstUpper(' 300room FOR yoUr   DESTiny'));