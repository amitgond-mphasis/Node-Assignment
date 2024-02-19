const fs = require('fs');

// File destination.txt will be created or overwritten by default.
function copyFile(sourceFile,destinationFile){
    fs.copyFile(sourceFile, destinationFile, (err) => {
        if (err) throw err;
        // console.log('source.txt was copied to destination.txt');
        });

        console.log(`data copied in ${destinationFile}`);
}

copyFile('random-words.txt',"newFile.txt");
