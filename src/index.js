const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const MORSE_TABLE = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
    };

    let a = expr;
    let temp = '';
    let array = [];
    let decodedString = '';
    let arr = a.match(/(.[0-1*]{1,9})/g);
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k += 2) {
            if (arr[i][k] == '1' && arr[i][k + 1] == '0') {
                if (k == 8) {
                    temp += '.X'
                } else temp += '.';

            } else if (arr[i][k] == '1' && arr[i][k + 1] == '1') {
                if (k == 8) {
                    temp += '-X'
                } else temp += '-';
            } else if (arr[i][k] == '*') {
                if (k == 8) {
                    temp += '*X'
                } else temp += '*';
            }
        }
    }
    let morseCode = temp.split('X');
    for (let item of morseCode) {
        switch (item) {
            case '.-': decodedString += 'a';
                break;
            case '-...': decodedString += 'b';
                break;
            case '-.-.': decodedString += 'c';
                break;
            case '-..': decodedString += 'd';
                break;
            case '.': decodedString += 'e';
                break;
            case '..-.': decodedString += 'f';
                break;
            case '--.': decodedString += 'g';
                break;
            case '....': decodedString += 'h';
                break;
            case '..': decodedString += 'i';
                break;
            case '.---': decodedString += 'j';
                break;
            case '-.-': decodedString += 'k';
                break;
            case '.-..': decodedString += 'l';
                break;
            case '--': decodedString += 'm';
                break;
            case '-.': decodedString += 'n';
                break;
            case '---': decodedString += 'o';
                break;
            case '.--.': decodedString += 'p';
                break;
            case '--.-': decodedString += 'q';
                break;
            case '.-.': decodedString += 'r';
                break;
            case '...': decodedString += 's';
                break;
            case '-': decodedString += 't';
                break;
            case '..-': decodedString += 'u';
                break;
            case '...-': decodedString += 'v';
                break;
            case '.--': decodedString += 'w';
                break;
            case '-..-': decodedString += 'x';
                break;
            case '-.--': decodedString += 'y';
                break;
            case '--..': decodedString += 'z';
                break;
            case '.----': decodedString += '1';
                break;
            case '..---': decodedString += '2';
                break;
            case '...--': decodedString += '3';
                break;
            case '....-': decodedString += '4';
                break;
            case '.....': decodedString += '5';
                break;
            case '-....': decodedString += '6';
                break;
            case '--...': decodedString += '7';
                break;
            case '---..': decodedString += '8';
                break;
            case '----.': decodedString += '9';
                break;
            case '-----': decodedString += '0';
                break;
            case '*****': decodedString += ' '
        }
    }
    return decodedString;

}

module.exports = {
    decode
}
