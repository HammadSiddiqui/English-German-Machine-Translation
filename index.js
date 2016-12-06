/*var Translator = require('machine-translator');
var t = new Translator('en.txt', 'de.txt');


t.train('en.txt', 'de.txt');

var x = t.translate('cat'); // { die: 0.5, Katze: 0.5 }
console.log(x);
//t.translate('the'); // { der: 0.2, Hund: 0.2, die: 0.2, Katze: 0.2, Bus: 0.2 }
//t.translate('car'); // Error: No matches found!
*/

var reader = require('text2token');
var convertedData = reader.text2token('en.txt')
