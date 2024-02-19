var fs = require('fs');

let word

let count=0;
while(count<100){
    word=Math.random().toString(36).slice(2)
    if(word.length===10){
        fs.appendFile('random-words.txt', word+'\n', function (err) {
            if (err) throw err;
            console.log('Updated!');
          });
        // console.log(word);
        count++;
    }
    
}