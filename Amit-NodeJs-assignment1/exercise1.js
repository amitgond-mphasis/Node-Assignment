
var fs = require('fs');
function getFileContent(fileName){
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      });

}


getFileContent('./lib/readme.text');

getFileContent('./lib/students.csv');

getFileContent('./lib/index.html');

