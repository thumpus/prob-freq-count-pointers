// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    const lettersFreq = {};
    const msgFreq = {};

    for (let letter of letters) {
        lettersFreq[letter] = ++lettersFreq[letter] || 1;
    }

    for (let letter of msg) {
        msgFreq[letter] = ++msgFreq[letter] || 1;
    }

    for (let letter in msgFreq) {
        if (!lettersFreq[letter]) {
            return false;
        }
        if (msgFreq[char] > lettersFreq[char]) {
            return false;
        }
    }

    return true;
}
