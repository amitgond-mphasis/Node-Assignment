//reading the file and printing into json formate

var fs = require('fs');
function getFileContent(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }
        // console.log(data);
        newData = data.split('\r\n');
        let arr = []
        for (let i = 0; i < newData.length; i++) {
            arr.push(newData[i].split('|'));
        }
          console.log(arr)
        let arrNew = []

        for (let i = 1; i < arr.length; i++) {
            let obj = {
                'Name': arr[i][0],
                'age': arr[i][1],
                'gender': arr[i][2],
                'city': arr[i][3]
            }
            arrNew.push(obj);
        }


        console.log(arrNew)

    });

}

getFileContent('studentData.txt')
