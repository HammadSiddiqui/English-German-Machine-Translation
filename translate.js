var Translator = require('machine-translator');
var t = new Translator('en.txt', 'de.txt');
var express = require('express');
var app = express();


//app.set('view engine', 'ejs');
var word = process.argv[2];
t.train('en.txt', 'de.txt');
var x = t.translate('I'); // { die: 0.5, Katze: 0.5 }
console.log(x);

/*
app.get('/', function(req, res) {
	console.log(req);
    res.render('index', {
    	transmission: x
    });
});

app.listen(3000, function () {
  console.log('Statistical Machine Translator listening on port 3000!');
});

t.train('en.txt', 'de.txt');
*/

//t.translate('the'); // { der: 0.2, Hund: 0.2, die: 0.2, Katze: 0.2, Bus: 0.2 }
//t.translate('car'); // Error: No matches found!


/*var reader = require('text2token');
var convertedData = reader.text2token('en.txt')
console.log(convertedData);
*/