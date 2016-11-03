var sentence = "Schlitz four dollar toast godard truffaut bespoke neutra artisan pop-up. Chia keytar single-origin coffee sustainable disrupt.";
var array = sentence.split(" ")

var lgth = 6;
var longest = [];

for(var i = 0; i < array.length; i++){
    if(array[i].length == lgth){
        longest.push(array[i]);
    }
}

console.log(longest);
